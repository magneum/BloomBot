# Youtube Playlist Downloader

This is a Node-JS application to download youtube playlist. The application is built using [Youtube Core](https://www.npmjs.com/package/ytdl-core) and [Youtube Playlist](https://www.npmjs.com/package/youtube-playlist).

## Install

```
$ npm install --save youtube-playlist-downloader
```
# Usage

```js
const ytplaylist = require('youtube-playlist-downloader');

ytplaylist('https://www.youtube.com/playlist?list=PL8mG-RkN2uTzbbUgvbn2YzBLLU3wktwo0');
```
## Options are the same we have for [Youtube Core](https://www.npmjs.com/package/ytdl-core) as the same is used in the package. **Thanks to [Fent](https://github.com/fent) and team**

### ytplaylist(url, [options])

Attempts to download a video from the given url. Returns a [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable). `options` can have the following keys

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_formats), a list of itag values, or `highest`/`lowest`/`highestaudio`/`lowestaudio`/`highestvideo`/`lowestvideo`. `highestaudio`/`lowestaudio`/`highestvideo`/`lowestvideo` all prefer audio/video only respectively. Defaults to `highest`, which prefers formats with both video and audio.

  A typical video's formats will be sorted in the following way using `quality: 'highest'`
  ```
  itag container quality codecs                 bitrate  audio bitrate
  18   mp4       360p    avc1.42001E, mp4a.40.2 696.66KB 96KB
  137  mp4       1080p   avc1.640028            4.53MB
  248  webm      1080p   vp9                    2.52MB
  136  mp4       720p    avc1.4d4016            2.2MB
  247  webm      720p    vp9                    1.44MB
  135  mp4       480p    avc1.4d4014            1.1MB
  134  mp4       360p    avc1.4d401e            593.26KB
  140  mp4               mp4a.40.2                       128KB
  ```
  format 18 at 360p will be chosen first since it's the highest quality format with both video and audio.
* `filter` - Used to filter the list of formats to choose from. Can be `audioandvideo` to filter formats that contain both video and audio, `video` to filter for formats that contain video, or `videoonly` for formats that contain video and no additional audio track. Can also be `audio` or `audioonly`. You can give a filtering function that gets called with each format available. This function is given the `format` object as its first argument, and should return true if the format is preferable.
  ```js
  ytplaylist(url, { filter: format => format.container === 'mp4' })
  ```
* `format` - Primarily used to download specific video or audio streams. This can be a specific `format` object returned from `getInfo`.
  * Supplying this option will ignore the `filter` and `quality` options since the format is explicitly provided.
* `range` - A byte range in the form `{start: INT, end: INT}` that specifies part of the file to download, ie {start: 10355705, end: 12452856}. Not supported on segmented (DASH MPD, m3u8) formats.
  * This downloads a portion of the file, and not a separately spliced video.
* `begin` - What time in the video to begin. Supports formats `00:00:00.000`, `0ms, 0s, 0m, 0h`, or number of milliseconds. Example: `1:30`, `05:10.123`, `10m30s`.
  * For live videos, this also accepts a unix timestamp or Date object, and defaults to `Date.now()`.
  * This option is not very reliable for non-live videos, see [#129](https://github.com/fent/node-ytdl-core/issues/129), [#219](https://github.com/fent/node-ytdl-core/issues/219).
* `liveBuffer` - How much time buffer to use for live videos in milliseconds. Default is `20000`.
* `requestOptions` - Anything to merge into the request options which [miniget](https://github.com/fent/node-miniget) is called with, such as `headers`.
* `highWaterMark` - How much of the video download to buffer into memory. See [node's docs](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) for more. Defaults to 512KB.
* `dlChunkSize` - The size of the download chunk in bytes. When the chosen format is video only or audio only, the download in this case is separated into multiple chunks to avoid throttling. Defaults to 10MB.
* `lang` - The 2 character symbol of a language. Default is `en`.
