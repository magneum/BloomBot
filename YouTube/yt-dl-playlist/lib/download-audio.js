'use strict'

const { once, EventEmitter } = require('events')
const path = require('path')
const ytdl = require('ytdl-core') // single video
const ytpl = require('ytpl') // playlist
const ffmpeg = require('fluent-ffmpeg')

const Rxfrom = require('rxjs').from
const { mergeMap, toArray } = require('rxjs/operators')

const YOUTUBE_URL = 'http://youtube.com/watch?v='

class DownloadYTAudio extends EventEmitter {
  constructor (opts = {}) {
    super()
    this.downloadPath = opts.outputPath || process.cwd()
    this.nameGenerator = opts.fileNameGenerator || (title => `${title.replace(/[\\/:*?"<>|]/g, '')}.mp3`)
    this.maxParallelDownload = opts.maxParallelDownload || 10

    if (opts.ffmpegPath) {
      process.nextTick(() => {
        ffmpeg.setFfmpegPath(opts.ffmpegPath)
      })
    }
  }

  /**
   *
   * @param {string} id the video from which to extrapolate the sound
   * @param {!string} fileName optinal filename output
   * @returns {Promise<object>} metadata of the mp3 file generated
   */
  async download (videoId, fileName) {
    const url = `${YOUTUBE_URL}${videoId}`
    const videoStream = ytdl(url, {
      quality: 'highestaudio'
    })

    // videoStream.on('progress', (a, b, c) => {
    //   console.log({ a, b, c })
    // })
    const [extendedVideoInfo, videoSetting] = await once(videoStream, 'info')
    const videoInfo = extendedVideoInfo.videoDetails

    if (!fileName) {
      fileName = this.nameGenerator(videoInfo.title)
    }

    const info = {
      id: videoId,
      fileName,
      path: this.downloadPath,
      filePath: path.join(this.downloadPath, fileName),
      ref: buildVideoRef(videoInfo)
    }

    this.emit('video-info', info, videoInfo)
    this.emit('video-setting', info, videoSetting)

    let theResolve
    let theReject
    const thePromise = new Promise((resolve, reject) => {
      theResolve = resolve
      theReject = reject
    })

    const command = ffmpeg(videoStream, {
      stdoutLines: 0
    })
      .format('mp3')
      .output(info.filePath)
      // TODO other config
      .on('start', () => { this.emit('start', info) })
      .on('end', () => {
        this.emit('complete', info)
        if (theResolve) {
          theResolve(info)
          theReject = null
        }
      })
      .on('error', (err) => {
        this.emit('error', err, info)
        if (theReject) {
          theReject(err)
          theResolve = null
        }
      })
      .on('progress', progress => {
        const update = { ...info, progress }
        this.emit('progress', update)
      })

    // start after the user register its events listener
    process.nextTick(() => { command.run() })

    return thePromise
  }

  /**
   *
   * @param {string} playlistId the id of the playlist to extract the sounds
   * @returns {Promise<[object]>} the results of the downloading, will contains errors and success
   */
  async downloadPlaylist (playlistId) {
    const playlistInfo = await this.getPlaylistInfo(playlistId)

    const downloadingSongs = async (song) => {
      try {
        const songFileName = this.nameGenerator(song.title)
        const songFile = await this.download(song.id, songFileName)
        return songFile
      } catch (error) {
        return {
          id: song.id,
          ref: song,
          error
        }
      }
    }

    const videoObservable = Rxfrom(playlistInfo.items)

    return videoObservable
      .pipe(mergeMap(video => downloadingSongs(video), this.maxParallelDownload))
      .pipe(toArray())
      .toPromise()
  }

  getPlaylistInfo (playlistId) {
    return ytpl(playlistId)
  }

  async getVideoInfo (videoId) {
    const url = `${YOUTUBE_URL}${videoId}`
    const advData = await ytdl.getBasicInfo(url)
    if (advData.formats.length === 0) {
      // sometimes even fake id return something
      throw new Error('This video is unavailable')
    }

    return buildVideoRef(advData.videoDetails)
  }
}

module.exports = DownloadYTAudio

function buildVideoRef (advData) {
  return {
    id: advData.videoId,
    url: advData.video_url,
    title: advData.title,
    thumbnail: advData.thumbnail.thumbnails.reduce(getBigger),
    duration: +(advData.lengthSeconds),
    author: advData.author
  }
}

function getBigger (a, b) {
  return (a.width > b.width) ? a : b
}
