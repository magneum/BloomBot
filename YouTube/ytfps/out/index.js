"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const rqOpts = {
    headers: {
        'User-Agent': 'hellobiczes',
        'x-youtube-client-name': 1,
        'x-youtube-client-version': '2.20200731.02.01'
    }
};
const baseURL = 'https://www.youtube.com';
let iAPIkey = '';
/**
 * Scraps youtube playlist metadata and all its videos
 * @param url URL or ID of the playlist you want to scrap
 * @param opts an optional YTFPSOptions object
 */
async function fetchFromPlaylist(url, opts = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    if (typeof opts.limit != 'undefined' && (typeof opts.limit != 'number' || isNaN(opts.limit) || opts.limit < 0))
        throw Error("Could not parse the limit option. Make sure it's an integer > 0, Infinity or undefined.");
    opts.limit = (_a = opts.limit) !== null && _a !== void 0 ? _a : Infinity;
    let test = /[?&]list=([^#\&\?]+)|^([a-zA-Z0-9-_]+)$/.exec(url);
    if (!test)
        throw Error('Invalid playlist URL or ID');
    let playlistID = test[1] || test[2];
    let videos = [];
    let ytInitialData;
    try {
        let body = (await axios_1.default.get('https://youtube.com/playlist?list=' + encodeURI(playlistID), rqOpts)).data;
        iAPIkey = (_b = /"INNERTUBE_API_KEY":"(.*?)"/.exec(body)) === null || _b === void 0 ? void 0 : _b[1];
        ytInitialData = JSON.parse(((_c = /(?:window\["ytInitialData"\])|(?:ytInitialData) =.*?({.*?});/s.exec(body)) === null || _c === void 0 ? void 0 : _c[1]) || '{}');
    }
    catch (_4) {
        throw Error('Could not fetch/parse playlist');
    }
    if (!iAPIkey)
        throw Error('Could not extract internal API key');
    if ((_d = JSON.stringify(ytInitialData.alerts)) === null || _d === void 0 ? void 0 : _d.includes("ERROR"))
        throw Error('This playlist is private or broken');
    if (!((_r = (_q = (_p = (_o = (_m = (_l = (_k = (_j = (_h = (_g = (_f = (_e = ytInitialData === null || ytInitialData === void 0 ? void 0 : ytInitialData.contents) === null || _e === void 0 ? void 0 : _e.twoColumnBrowseResultsRenderer) === null || _f === void 0 ? void 0 : _f.tabs) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.tabRenderer) === null || _j === void 0 ? void 0 : _j.content) === null || _k === void 0 ? void 0 : _k.sectionListRenderer) === null || _l === void 0 ? void 0 : _l.contents) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.itemSectionRenderer) === null || _p === void 0 ? void 0 : _p.contents) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.playlistVideoListRenderer))
        throw Error('Cannot find valid playlist JSON data. Is the playlist ID correct?');
    let listData = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer;
    let d = ytInitialData;
    let contToken = ((_x = (_w = (_v = (_u = (_t = (_s = listData === null || listData === void 0 ? void 0 : listData.contents) === null || _s === void 0 ? void 0 : _s.slice(-1)) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.continuationItemRenderer) === null || _v === void 0 ? void 0 : _v.continuationEndpoint) === null || _w === void 0 ? void 0 : _w.continuationCommand) === null || _x === void 0 ? void 0 : _x.token) || '';
    if (listData.contents)
        videos.push(...parseVideosFromJson(listData.contents, opts));
    if (contToken && opts.limit > 0)
        videos.push(...(await getAllVideos(contToken, opts)));
    try {
        let mf = d.microformat.microformatDataRenderer;
        let si0 = d.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer;
        let si1 = (_y = d.sidebar.playlistSidebarRenderer.items[1]) === null || _y === void 0 ? void 0 : _y.playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer;
        return {
            title: mf.title,
            url: baseURL + '/playlist?list=' + listData.playlistId,
            id: listData.playlistId,
            video_count: +((_0 = (_z = si0.stats[0].runs[0]) === null || _z === void 0 ? void 0 : _z.text) === null || _0 === void 0 ? void 0 : _0.replace(/[^0-9]/g, '')),
            view_count: +((_2 = (_1 = si0.stats[1]) === null || _1 === void 0 ? void 0 : _1.simpleText) === null || _2 === void 0 ? void 0 : _2.replace(/[^0-9]/g, '')) || 0,
            description: mf.description,
            isUnlisted: mf.unlisted,
            isAlbum: 'albumName' in d.metadata.playlistMetadataRenderer,
            thumbnail_url: mf.thumbnail.thumbnails.pop().url.replace(/(?:&v=|&days).*/, ''),
            author: si1 && {
                name: si1.title.runs[0].text,
                url: baseURL + si1.title.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url,
                avatar_url: si1.thumbnail.thumbnails.pop().url
            },
            videos: videos
        };
    }
    catch (e) {
        throw Error('Could not parse playlist metadata: ' + ((_3 = e) === null || _3 === void 0 ? void 0 : _3.message));
    }
}
function parseVideosFromJson(videoDataArray, opts) {
    try {
        let videos = [];
        for (const vid of videoDataArray)
            try {
                if (opts.limit <= 0)
                    break;
                const v = vid.playlistVideoRenderer;
                videos.push({
                    title: v.title.runs[0].text,
                    url: baseURL + '/watch?v=' + v.videoId,
                    id: v.videoId,
                    length: v.lengthText.simpleText,
                    milis_length: +v.lengthSeconds * 1000,
                    thumbnail_url: 'https://i.ytimg.com/vi/' + v.videoId + '/hqdefault.jpg',
                    author: {
                        name: v.shortBylineText.runs[0].text,
                        url: baseURL + v.shortBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url
                    }
                });
                --opts.limit;
            }
            catch (_a) {
                continue;
            }
        return videos;
    }
    catch (_b) {
        throw Error('Could not parse videos from videoData JSON');
    }
}
async function getAllVideos(ajax_url, opts, videos = []) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    try {
        let ytAppendData = (await axios_1.default.post(baseURL + '/youtubei/v1/browse?key=' + iAPIkey, { "context": { "client": { "clientName": "WEB", "clientVersion": "2.20210401.08.00" } }, "continuation": ajax_url }, rqOpts)).data;
        let contToken = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = ytAppendData.onResponseReceivedActions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.appendContinuationItemsAction) === null || _c === void 0 ? void 0 : _c.continuationItems) === null || _d === void 0 ? void 0 : _d.slice(-1)) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.continuationItemRenderer) === null || _g === void 0 ? void 0 : _g.continuationEndpoint) === null || _h === void 0 ? void 0 : _h.continuationCommand) === null || _j === void 0 ? void 0 : _j.token;
        videos.push(...parseVideosFromJson(ytAppendData.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems, opts));
        return (contToken && opts.limit > 0) ? await getAllVideos(contToken, opts, videos) : videos;
    }
    catch (_k) {
        throw Error('An error has occured while trying to fetch more videos');
    }
}
module.exports = fetchFromPlaylist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtEQUErQztBQUsvQyxNQUFNLE1BQU0sR0FBdUI7SUFDL0IsT0FBTyxFQUFFO1FBQ0wsWUFBWSxFQUFFLGFBQWE7UUFDM0IsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQiwwQkFBMEIsRUFBRSxrQkFBa0I7S0FDakQ7Q0FDSixDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUcseUJBQXlCLENBQUM7QUFDMUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBRWpCOzs7O0dBSUc7QUFDSCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsR0FBVyxFQUFFLE9BQXFCLEVBQUU7O0lBQ2pFLElBQUcsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6RyxNQUFNLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO0lBRTNHLElBQUksQ0FBQyxLQUFLLFNBQUcsSUFBSSxDQUFDLEtBQUssbUNBQUksUUFBUSxDQUFDO0lBQ3BDLElBQUksSUFBSSxHQUFHLHlDQUF5QyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvRCxJQUFHLENBQUMsSUFBSTtRQUNKLE1BQU0sS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDOUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxJQUFJLE1BQU0sR0FBYyxFQUFFLENBQUM7SUFDM0IsSUFBSSxhQUFrQixDQUFDO0lBRXZCLElBQUk7UUFDQSxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sZUFBRSxDQUFD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LElBQUksQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLEdBQUcsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsa0JBQWtCLEVBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4TSxJQUFJLFNBQVMseURBQVEsWUFBWSxDQUFDLHlCQUF5QiwwQ0FBRyxDQUFDLDJDQUFHLDZCQUE2QiwwQ0FBRSxpQkFBaUIsMENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQywyQ0FBSSxDQUFDLDJDQUFHLHdCQUF3QiwwQ0FBRSxvQkFBb0IsMENBQUUsbUJBQW1CLDBDQUFFLEtBQUssQ0FBQztRQUMvTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDaEc7SUFBQyxXQUFNO1FBQ0osTUFBTSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztLQUN6RTtBQUNMLENBQUM7QUF0SEQsaUJBQVMsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXgsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBZVEZQU09wdGlvbnMsIFlUUGxheWxpc3QsIFlUdmlkZW8gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0ID0gZmV0Y2hGcm9tUGxheWxpc3Q7XHJcblxyXG5jb25zdCBycU9wdHM6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnVXNlci1BZ2VudCc6ICdoZWxsb2JpY3plcycsXHJcbiAgICAgICAgJ3gteW91dHViZS1jbGllbnQtbmFtZSc6IDEsXHJcbiAgICAgICAgJ3gteW91dHViZS1jbGllbnQtdmVyc2lvbic6ICcyLjIwMjAwNzMxLjAyLjAxJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tJztcclxubGV0IGlBUElrZXkgPSAnJztcclxuXHJcbi8qKlxyXG4gKiBTY3JhcHMgeW91dHViZSBwbGF5bGlzdCBtZXRhZGF0YSBhbmQgYWxsIGl0cyB2aWRlb3NcclxuICogQHBhcmFtIHVybCBVUkwgb3IgSUQgb2YgdGhlIHBsYXlsaXN0IHlvdSB3YW50IHRvIHNjcmFwXHJcbiAqIEBwYXJhbSBvcHRzIGFuIG9wdGlvbmFsIFlURlBTT3B0aW9ucyBvYmplY3RcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRnJvbVBsYXlsaXN0KHVybDogc3RyaW5nLCBvcHRzOiBZVEZQU09wdGlvbnMgPSB7fSkgOiBQcm9taXNlPFlUUGxheWxpc3Q+IHtcclxuICAgIGlmKHR5cGVvZiBvcHRzLmxpbWl0ICE9ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygb3B0cy5saW1pdCAhPSAnbnVtYmVyJyB8fCBpc05hTihvcHRzLmxpbWl0KSB8fCBvcHRzLmxpbWl0IDwgMCkpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJDb3VsZCBub3QgcGFyc2UgdGhlIGxpbWl0IG9wdGlvbi4gTWFrZSBzdXJlIGl0J3MgYW4gaW50ZWdlciA+IDAsIEluZmluaXR5IG9yIHVuZGVmaW5lZC5cIik7XHJcblxyXG4gICAgb3B0cy5saW1pdCA9IG9wdHMubGltaXQgPz8gSW5maW5pdHk7XHJcbiAgICBsZXQgdGVzdCA9IC9bPyZdbGlzdD0oW14jXFwmXFw/XSspfF4oW2EtekEtWjAtOS1fXSspJC8uZXhlYyh1cmwpO1xyXG4gICAgaWYoIXRlc3QpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcGxheWxpc3QgVVJMIG9yIElEJyk7XHJcbiAgICBsZXQgcGxheWxpc3RJRCA9IHRlc3RbMV0gfHwgdGVzdFsyXTtcclxuICAgIGxldCB2aWRlb3M6IFlUdmlkZW9bXSA9IFtdO1xyXG4gICAgbGV0IHl0SW5pdGlhbERhdGE6IGFueTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBib2R5ID0gKGF3YWl0IGF4LmdldCgnaHR0cHM6Ly95b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PScgKyBlbmNvZGVVUkkocGxheWxpc3RJRCksIHJxT3B0cykpLmRhdGEgYXMgc3RyaW5nO1xyXG4gICAgICAgIGlBUElrZXkgPSAvXCJJTk5FUlRVQkVfQVBJX0tFWVwiOlwiKC4qPylcIi8uZXhlYyhib2R5KT8uWzFdIGFzIHN0cmluZztcclxuICAgICAgICB5dEluaXRpYWxEYXRhID0gSlNPTi5wYXJzZSgvKD86d2luZG93XFxbXCJ5dEluaXRpYWxEYXRhXCJcXF0pfCg/Onl0SW5pdGlhbERhdGEpID0uKj8oey4qP30pOy9zLmV4ZWMoYm9keSk/LlsxXSB8fCAne30nKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmV0Y2gvcGFyc2UgcGxheWxpc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZighaUFQSWtleSlcclxuICAgICAgICB0aHJvdyBFcnJvcignQ291bGQgbm90IGV4dHJhY3QgaW50ZXJuYWwgQVBJIGtleScpO1xyXG4gICAgaWYoSlNPTi5zdHJpbmdpZnkoeXRJbml0aWFsRGF0YS5hbGVydHMpPy5pbmNsdWRlcyhcIkVSUk9SXCIpKVxyXG4gICAgICAgIHRocm93IEVycm9yKCdUaGlzIHBsYXlsaXN0IGlzIHByaXZhdGUgb3IgYnJva2VuJyk7XHJcbiAgICBpZigheXRJbml0aWFsRGF0YT8uY29udGVudHM/LnR3b0NvbHVtbkJyb3dzZVJlc3VsdHNSZW5kZXJlcj8udGFicz8uWzBdPy50YWJSZW5kZXJlcj8uY29udGVudD8uc2VjdGlvbkxpc3RSZW5kZXJlcj8uY29udGVudHM/LlswXT8uaXRlbVNlY3Rpb25SZW5kZXJlcj8uY29udGVudHM/LlswXT8ucGxheWxpc3RWaWRlb0xpc3RSZW5kZXJlcilcclxuICAgICAgICB0aHJvdyBFcnJvcignQ2Fubm90IGZpbmQgdmFsaWQgcGxheWxpc3QgSlNPTiBkYXRhLiBJcyB0aGUgcGxheWxpc3QgSUQgY29ycmVjdD8nKTtcclxuICAgIGxldCBsaXN0RGF0YSA9IHl0SW5pdGlhbERhdGEuY29udGVudHMudHdvQ29sdW1uQnJvd3NlUmVzdWx0c1JlbmRlcmVyLnRhYnNbMF0udGFiUmVuZGVyZXIuY29udGVudC5zZWN0aW9uTGlzdFJlbmRlcmVyLmNvbnRlbnRzWzBdLml0ZW1TZWN0aW9uUmVuZGVyZXIuY29udGVudHNbMF0ucGxheWxpc3RWaWRlb0xpc3RSZW5kZXJlcjtcclxuICAgIGxldCBkID0geXRJbml0aWFsRGF0YTtcclxuXHJcbiAgICBsZXQgY29udFRva2VuOiBzdHJpbmcgPSBsaXN0RGF0YT8uY29udGVudHM/LnNsaWNlKC0xKT8uWzBdPy5jb250aW51YXRpb25JdGVtUmVuZGVyZXI/LmNvbnRpbnVhdGlvbkVuZHBvaW50Py5jb250aW51YXRpb25Db21tYW5kPy50b2tlbiB8fCAnJztcclxuICAgIGlmKGxpc3REYXRhLmNvbnRlbnRzKVxyXG4gICAgICAgIHZpZGVvcy5wdXNoKC4uLnBhcnNlVmlkZW9zRnJvbUpzb24obGlzdERhdGEuY29udGVudHMsIG9wdHMpKTtcclxuICAgIGlmKGNvbnRUb2tlbiAmJiBvcHRzLmxpbWl0ID4gMClcclxuICAgICAgICB2aWRlb3MucHVzaCguLi4oYXdhaXQgZ2V0QWxsVmlkZW9zKGNvbnRUb2tlbiwgb3B0cykpKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBtZiA9IGQubWljcm9mb3JtYXQubWljcm9mb3JtYXREYXRhUmVuZGVyZXI7XHJcbiAgICAgICAgbGV0IHNpMCA9IGQuc2lkZWJhci5wbGF5bGlzdFNpZGViYXJSZW5kZXJlci5pdGVtc1swXS5wbGF5bGlzdFNpZGViYXJQcmltYXJ5SW5mb1JlbmRlcmVyO1xyXG4gICAgICAgIGxldCBzaTEgPSBkLnNpZGViYXIucGxheWxpc3RTaWRlYmFyUmVuZGVyZXIuaXRlbXNbMV0/LnBsYXlsaXN0U2lkZWJhclNlY29uZGFyeUluZm9SZW5kZXJlci52aWRlb093bmVyLnZpZGVvT3duZXJSZW5kZXJlcjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogbWYudGl0bGUsXHJcbiAgICAgICAgICAgIHVybDogYmFzZVVSTCArICcvcGxheWxpc3Q/bGlzdD0nICsgbGlzdERhdGEucGxheWxpc3RJZCxcclxuICAgICAgICAgICAgaWQ6IGxpc3REYXRhLnBsYXlsaXN0SWQsXHJcbiAgICAgICAgICAgIHZpZGVvX2NvdW50OiArc2kwLnN0YXRzWzBdLnJ1bnNbMF0/LnRleHQ/LnJlcGxhY2UoL1teMC05XS9nLCAnJyksXHJcbiAgICAgICAgICAgIHZpZXdfY291bnQ6ICtzaTAuc3RhdHNbMV0/LnNpbXBsZVRleHQ/LnJlcGxhY2UoL1teMC05XS9nLCAnJykgfHwgMCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1mLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBpc1VubGlzdGVkOiBtZi51bmxpc3RlZCxcclxuICAgICAgICAgICAgaXNBbGJ1bTogJ2FsYnVtTmFtZScgaW4gZC5tZXRhZGF0YS5wbGF5bGlzdE1ldGFkYXRhUmVuZGVyZXIsXHJcbiAgICAgICAgICAgIHRodW1ibmFpbF91cmw6IG1mLnRodW1ibmFpbC50aHVtYm5haWxzLnBvcCgpLnVybC5yZXBsYWNlKC8oPzomdj18JmRheXMpLiovLCAnJyksXHJcbiAgICAgICAgICAgIGF1dGhvcjogc2kxICYmIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHNpMS50aXRsZS5ydW5zWzBdLnRleHQsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGJhc2VVUkwgKyBzaTEudGl0bGUucnVuc1swXS5uYXZpZ2F0aW9uRW5kcG9pbnQuY29tbWFuZE1ldGFkYXRhLndlYkNvbW1hbmRNZXRhZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJfdXJsOiBzaTEudGh1bWJuYWlsLnRodW1ibmFpbHMucG9wKCkudXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZpZGVvczogdmlkZW9zXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSBwbGF5bGlzdCBtZXRhZGF0YTogJyArIChlIGFzIEVycm9yKT8ubWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlVmlkZW9zRnJvbUpzb24odmlkZW9EYXRhQXJyYXk6IGFueVtdLCBvcHRzOiBZVEZQU09wdGlvbnMpIDogWVR2aWRlb1tdIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHZpZGVvczogWVR2aWRlb1tdID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IHZpZCBvZiB2aWRlb0RhdGFBcnJheSlcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKG9wdHMubGltaXQhIDw9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdmlkLnBsYXlsaXN0VmlkZW9SZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgIHZpZGVvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdi50aXRsZS5ydW5zWzBdLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlVVJMICsgJy93YXRjaD92PScgKyB2LnZpZGVvSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHYudmlkZW9JZCxcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHYubGVuZ3RoVGV4dC5zaW1wbGVUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbGlzX2xlbmd0aDogK3YubGVuZ3RoU2Vjb25kcyAqIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsX3VybDogJ2h0dHBzOi8vaS55dGltZy5jb20vdmkvJyArIHYudmlkZW9JZCArICcvaHFkZWZhdWx0LmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHYuc2hvcnRCeWxpbmVUZXh0LnJ1bnNbMF0udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlVVJMICsgdi5zaG9ydEJ5bGluZVRleHQucnVuc1swXS5uYXZpZ2F0aW9uRW5kcG9pbnQuY29tbWFuZE1ldGFkYXRhLndlYkNvbW1hbmRNZXRhZGF0YS51cmxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC0tb3B0cy5saW1pdCE7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlkZW9zO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSB2aWRlb3MgZnJvbSB2aWRlb0RhdGEgSlNPTicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxWaWRlb3MoYWpheF91cmw6IHN0cmluZywgb3B0czogWVRGUFNPcHRpb25zLCB2aWRlb3M6IFlUdmlkZW9bXSA9IFtdKSA6IFByb21pc2U8WVR2aWRlb1tdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB5dEFwcGVuZERhdGEgPSAoYXdhaXQgYXgucG9zdChiYXNlVVJMICsgJy95b3V0dWJlaS92MS9icm93c2U/a2V5PScgKyBpQVBJa2V5LCB7XCJjb250ZXh0XCI6e1wiY2xpZW50XCI6e1wiY2xpZW50TmFtZVwiOlwiV0VCXCIsXCJjbGllbnRWZXJzaW9uXCI6XCIyLjIwMjEwNDAxLjA4LjAwXCJ9fSxcImNvbnRpbnVhdGlvblwiOmFqYXhfdXJsfSwgcnFPcHRzKSkuZGF0YTtcclxuICAgICAgICBsZXQgY29udFRva2VuOiBhbnkgPSB5dEFwcGVuZERhdGEub25SZXNwb25zZVJlY2VpdmVkQWN0aW9ucz8uWzBdPy5hcHBlbmRDb250aW51YXRpb25JdGVtc0FjdGlvbj8uY29udGludWF0aW9uSXRlbXM/LnNsaWNlKC0xKT8uWzBdPy5jb250aW51YXRpb25JdGVtUmVuZGVyZXI/LmNvbnRpbnVhdGlvbkVuZHBvaW50Py5jb250aW51YXRpb25Db21tYW5kPy50b2tlbjtcclxuICAgICAgICB2aWRlb3MucHVzaCguLi5wYXJzZVZpZGVvc0Zyb21Kc29uKHl0QXBwZW5kRGF0YS5vblJlc3BvbnNlUmVjZWl2ZWRBY3Rpb25zWzBdLmFwcGVuZENvbnRpbnVhdGlvbkl0ZW1zQWN0aW9uLmNvbnRpbnVhdGlvbkl0ZW1zLCBvcHRzKSk7XHJcbiAgICAgICAgcmV0dXJuIChjb250VG9rZW4gJiYgb3B0cy5saW1pdCEgPiAwKSA/IGF3YWl0IGdldEFsbFZpZGVvcyhjb250VG9rZW4sIG9wdHMsIHZpZGVvcykgOiB2aWRlb3M7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBFcnJvcignQW4gZXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoIG1vcmUgdmlkZW9zJyk7XHJcbiAgICB9XHJcbn1cclxuIl19