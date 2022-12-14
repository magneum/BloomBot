# yt-dl-playlist

![ci](https://github.com/Eomm/youtube-download-playlist/workflows/ci/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/Eomm/youtube-download-playlist/badge.svg?branch=master)](https://coveralls.io/github/Eomm/youtube-download-playlist?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=yt-dl-playlist)](https://packagephobia.now.sh/result?p=yt-dl-playlist)

This module let you to programatic download the audio files of a video playlist on YouTube in MP3 format.
It exposes API to download also single audio.

The name of this module is due the npm policy, call it `youtube-download-playlist`.

⚠ You must use this module/cli respecting the [YouTube's Copyright Policies](https://www.youtube.com/intl/en/about/copyright/#support-and-troubleshooting).

## Install

### Requirements

- [Node.js](https://nodejs.org/it/download/) >= v10
- [`ffmpeg`](https://www.ffmpeg.org/download.html) installed in your system

```sh
npm install yt-dl-playlist
```

## Usage

### CLI - Command Line Interface

Run `yd --help` to see all the options!!

The cli is very simple and quick-and-dirty:

```sh
# NPM Global
npm install yt-dl-playlist -g
yd <video_id or playlist_id>

# NPX
npx yt-dl-playlist <video_id or playlist_id> [flags]
```

Examples:

```sh
# Download playlist
yd PLAv2aQ9JgGbVcUtDpuiTB9WgaMljCUpa_ -p

# Download audio
yd 2bexTB7xq_U

# View info video
yd --info 2bexTB7xq_U
```


#### FFMPEG

This program needs [`ffmpeg`](https://www.ffmpeg.org/download.html).
It is a free program that elaborate video and audio stream.
It can be download also in the portable `.zip` without installation!

To config the `ffmpeg` path you can run the script in a `cmd` shell like this:

```sh
yd ZIyyj2FrVI0 -F /ffmpeg/bin
```

Or more simply run the `yd` command from the directory where ffmpeg is saved:

```sh
cd download/ffmpeg/bin
yd ZIyyj2FrVI0
```


### Module

You can use this lib as a module also!

```js
const DownloadYTFile = require('yt-dl-playlist')

const downloader = new DownloadYTFile({ 
  outputPath: process.cwd(),
  ffmpegPath: './ffmpeg/bin/ffmpeg.exe',
  maxParallelDownload: 10,
  fileNameGenerator: (videoTitle) => {
    return 'a-new-file-name.mp3'
  }
})

downloader.on('video-info', (fileInfo, video) => {
  console.log({ fileInfo, video })
})
downloader.on('video-setting', (fileInfo, settings) => {
  console.log({ fileInfo, settings })
})
downloader.on('start', (fileInfo) => console.log(fileInfo))
downloader.on('progress', (fileInfo) => console.log(fileInfo))
downloader.on('complete', (fileInfo) => console.log(fileInfo))
downloader.on('error', (fileInfo) => console.log(fileInfo.error))

downloader.download(id, inputFileName = null) : Promise<object>
downloader.downloadPlaylist(playlistId) : Promise<Array>

downloader.getPlaylistInfo(playlistId) : Promise<object>
downloader.getVideoInfo(videoId) : Promise<object>
```


## License

Copyright [MIT](./LICENSE).
