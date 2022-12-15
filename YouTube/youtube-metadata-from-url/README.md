# youtube-metadata-from-url

## Simple module to get a video metadata from url

[![npm](https://img.shields.io/npm/v/youtube-metadata-from-url.svg)](https://www.npmjs.com/package/youtube-metadata-from-url) [![npm](https://img.shields.io/npm/dm/youtube-metadata-from-url.svg)](https://www.npmjs.com/package/youtube-metadata-from-url)

[![NPM](https://nodei.co/npm/youtube-metadata-from-url.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/youtube-metadata-from-url)

**youtube-metadata-from-url** is a simple module to get a youtube metadata passing just the video url.

## Install

```npm install youtube-metadata-from-url --save ```

## Example


```js

const youtube = require('youtube-metadata-from-url');
const url = 'https://youtu.be/TRqiFPpw2fY';

youtube.metadata(url).then(function(json) {
	console.log(json);
}, function(err){
	console.log(err);
});

```

#### Response

```js
{
  "thumbnail_url": "https://i.ytimg.com/vi/WC5FdFlUcl0/hqdefault.jpg",
  "type": "video",
  "thumbnail_width": 480,
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/WC5FdFlUcl0?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
  "author_name": "AudioslaveVEVO",
  "height": 270,
  "width": 480,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/AudioslaveVEVO",
  "title": "Audioslave - Be Yourself (Album Version, Closed Captioned)",
  "provider_url": "https://www.youtube.com/",
  "thumbnail_height": 360,
  "version": "1.0"
}
```


## License

This project is provided for educational purposes only. It is not affiliated with and has
not been approved by Youtube.
