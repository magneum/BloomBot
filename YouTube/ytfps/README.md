# ytfps
##### **YouTube Full Playlist Scraper**

Tiny module to scrap youtube playlist or album metadata and their videos (not limited to 100)

# Install

    npm install ytfps

# Usage

```js
const ytfps = require('ytfps');
// TypeScript: import ytfps from 'ytfps'; //with --esModuleInterop

ytfps('PLAbeRqyTx1rIGWY13HgPyh0VF0LdoTQFp').then(playlist => {
    do_something(playlist);
}).catch(err => {
    handle_error(err);
});

//you can also pass an YTFPSOptions object to limit the amount of videos you want to scrap:
let playlist = await ytfps(playlistId, { limit: 13 });
```

# API
    ytfps(id, opts?);

Scraps the supplied playlist and returns a promise with its metadata.

* `id`
    * youtube playlist's id
    * or youtube playlist's URL
* `opts`
    * an optional YTFPSOptions object:
        ```ts
        interface YTFPSOptions {
            limit?: number
        }
        ```

* [Example response](https://github.com/Caier/ytfps/blob/master/example/output.json)


# License
MIT