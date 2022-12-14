#!/usr/bin/env node

'use strict'
const { program } = require('commander')
const DownloadYTFile = require('./lib/download-audio')

program
  .name('yd')
  .version(require('./package.json').version)
  .option('-d, --debug', 'output extra debugging')
  .option('-i, --info', 'show only the info about the id')
  .option('-p, --playlist', 'the id do download is a playlist')
  .option('-F, --ffmpeg [path]', 'path to the ffmpeg if is not in PATH')
  .arguments('<id>')
  .action(async function (id, cmdObj) {
    const downloader = new DownloadYTFile({
      outputPath: process.cwd(),
      ffmpegPath: cmdObj.ffmpeg
    })

    if (cmdObj.debug) {
      downloader.on('video-info', (item, video) => {
        console.log(`Get info for ${item.id} ${item.fileName}`)
      })
      downloader.on('video-setting', (item, video) => {
        console.log(`Video details ${item.fileName}`)
        console.log(`\tbitrate ${video.bitrate}`)
        console.log(`\taudioBitrate ${video.audioBitrate}`)
        console.log(`\titag ${video.itag}`)
        console.log(`\tcontentLength ${video.contentLength}`)
        console.log(`\tquality ${video.quality}`)
        console.log(`\taudioQuality ${video.audioQuality}`)
        console.log(`\taudioSampleRate ${video.audioSampleRate}`)
      })
      downloader.on('start', item => console.log(`Starting download ${item.id} - ${item.fileName}`))
      downloader.on('progress', item => console.log(`Converting ${item.fileName} t: ${item.progress.timemark}`))
      downloader.on('complete', item => console.log(`Completed download ${item.id} - ${item.fileName}`))
      downloader.on('error', item => console.error(`Error converting ${item.fileName}`))
    }

    const isDisplay = cmdObj.info
    const isPlaylist = cmdObj.playlist

    if (isPlaylist) {
      if (isDisplay) {
        const info = await downloader.getPlaylistInfo(id)
        console.log(`The playlist ${info.id} is "${info.title}" created by ${info.author.name}`)
        info.items.forEach(_ => { console.log(`\t- ${info.id} is "${info.title}"`) })
      } else {
        console.log('Start downloading playlist...')
        const result = await downloader.downloadPlaylist(id)
        console.log(`Download Playlist ${result.reduce(countSuccess, 0)}/${result.length}`)
      }
    } else {
      if (isDisplay) {
        const info = await downloader.getVideoInfo(id)
        console.log(`The video ${info.id} is "${info.title}" ${info.duration} sec created by ${info.author.name}`)
      } else {
        console.log('Start downloading audio...')
        const result = await downloader.download(id)
        console.log(`Download COMPLETED of ${result.id} "${result.ref.title}" in ${result.filePath}`)
      }
    }
  })
  .parseAsync(process.argv)

function countSuccess (acc, res) {
  return acc + (res.error ? 0 : 1)
}
