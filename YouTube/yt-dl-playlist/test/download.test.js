'use strict'

const t = require('tap')
const path = require('path')
const DownloadYTAudio = require('../lib/download-audio')

const OUT_DIR = 'test/out'
const TEST_PLAYLIST = {
  singleSong: { id: 'A02s8omM_hI', length: 1 },
  twoSongs: { id: 'PLAv2aQ9JgGbVcUtDpuiTB9WgaMljCUpa_', length: 2 },
  twoSongsDuplicated: { id: 'PLAv2aQ9JgGbVEzvdzyoigNgnJcvOtMmU0', length: 2 },
  hundredSongs: { id: 'PLzCxunOM5WFKZuBXTe8EobD6Dwi4qV-kO', length: 100 }
}

t.setTimeout(0)

t.test('download ffmpeg error', { timeout: 300000 }, async t => {
  // this must be the first test because fluent-ffmpeg cache the right path of ffmpeg (_getFfmpegPath)
  let errorEvents = 0

  process.env.PATH = ''
  const downloader = new DownloadYTAudio({
    // ffmpegPath: '/test',
    outputPath: OUT_DIR,
    fileNameGenerator: title => {
      t.pass('executed file name gen')
      return 'foo-bar.mp3'
    }
  })
  downloader.on('error', () => errorEvents++)

  try {
    await downloader.download(TEST_PLAYLIST.singleSong.id)
    t.fail('should not happen')
  } catch (err) {
    t.ok(err)
    t.like(err.message, 'Cannot find ffmpeg')
    t.equals(errorEvents, 1)
  }
})

t.test('get video info', async t => {
  const downloader = new DownloadYTAudio({ outputPath: OUT_DIR })
  const info = await downloader.getVideoInfo(TEST_PLAYLIST.singleSong.id)
  const compareTo = {
    id: TEST_PLAYLIST.singleSong.id,
    title: 'Šílený Ota',
    duration: 7,
    author: {
      name: 'DanielKec'
    }
  }
  t.like(info, compareTo)
  t.ok(info.url)
  t.ok(info.thumbnail)
})

t.test('get video info error', async t => {
  try {
    const downloader = new DownloadYTAudio({ outputPath: OUT_DIR })
    await downloader.getVideoInfo('abcdefg8761')
    t.fail('should not happen')
  } catch (err) {
    t.ok(err)
    t.like(err.message, 'unavailable')
  }
})

t.test('get playlist info', async t => {
  const downloader = new DownloadYTAudio({ outputPath: OUT_DIR })
  const info = await downloader.getPlaylistInfo(TEST_PLAYLIST.hundredSongs.id)

  t.equals(info.id, TEST_PLAYLIST.hundredSongs.id)
  t.equals(info.items.length, TEST_PLAYLIST.hundredSongs.length)
  info.items.forEach((i) => {
    t.ok(i.id)
    t.ok(i.title)
  })
})

t.test('get playlist info error', async t => {
  try {
    const downloader = new DownloadYTAudio({ outputPath: OUT_DIR })
    await downloader.getPlaylistInfo('abcdefg8761')
    t.fail('should not happen')
  } catch (err) {
    t.ok(err)
    t.like(err.message, 'Unable to find a id in "abcdefg8761"')
  }
})

t.test('download single audio', { timeout: 300000 }, async t => {
  let infoEvent = 0
  let infoSetting = 0
  let startEvents = 0
  let progressEvents = 0
  let completeEvents = 0
  let errorEvents = 0

  const downloader = new DownloadYTAudio({
    ffmpegPath: process.env.CI ? '/usr/local/bin/ffmpeg' : path.join(__dirname, '../ffmpeg/bin/ffmpeg'),
    outputPath: OUT_DIR
  })
  downloader.on('video-info', () => infoEvent++)
  downloader.on('video-setting', () => infoSetting++)
  downloader.on('start', () => startEvents++)
  downloader.on('progress', () => progressEvents++)
  downloader.on('complete', () => completeEvents++)
  downloader.on('error', () => errorEvents++)

  const fileName = `${Date.now()}.mp3`
  const result = await downloader.download(TEST_PLAYLIST.singleSong.id, fileName)

  t.like(result, {
    id: TEST_PLAYLIST.singleSong.id,
    path: OUT_DIR,
    fileName,
    filePath: path.join(OUT_DIR, fileName)
  })
  t.equals(infoEvent, 1)
  t.equals(infoSetting, 1)
  t.equals(startEvents, TEST_PLAYLIST.singleSong.length)
  t.equals(completeEvents, TEST_PLAYLIST.singleSong.length)
  t.ok(progressEvents >= TEST_PLAYLIST.singleSong.length)
  t.equals(errorEvents, 0)
})

t.test('download small playlist', { timeout: 300000 }, () => downloadPlaylist(TEST_PLAYLIST.twoSongs))
t.test('download huge playlist', { timeout: 300000, skip: true }, () => downloadPlaylist(TEST_PLAYLIST.hundredSongs))

async function downloadPlaylist (testPlaylist) {
  let infoEvent = 0
  let infoSetting = 0
  let startEvents = 0
  let progressEvents = 0
  let completeEvents = 0
  let errorEvents = 0

  const downloader = new DownloadYTAudio({
    ffmpegPath: process.env.CI ? '/usr/local/bin/ffmpeg' : path.join(__dirname, '../ffmpeg/bin/ffmpeg'),
    outputPath: OUT_DIR
  })

  downloader.on('video-info', () => infoEvent++)
  downloader.on('video-setting', () => infoSetting++)
  downloader.on('start', () => startEvents++)
  downloader.on('progress', () => progressEvents++)
  downloader.on('complete', () => completeEvents++)
  downloader.on('error', () => errorEvents++)

  const result = await downloader.downloadPlaylist(testPlaylist.id)

  t.equals(result.length, testPlaylist.length)
  t.equals(infoEvent, testPlaylist.length)
  t.equals(infoSetting, testPlaylist.length)
  t.equals(startEvents, testPlaylist.length)
  t.equals(completeEvents + errorEvents, testPlaylist.length)
  t.ok(progressEvents) // high speed network, less progress event

  result.forEach((song) => {
    t.ok(song.id)
    t.ok(song.fileName || song.error)
    t.ok(song.ref)
  })
}
