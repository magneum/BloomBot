import ax, { AxiosRequestConfig } from 'axios';
import { YTFPSOptions, YTPlaylist, YTvideo } from './interfaces';

export = fetchFromPlaylist;

const rqOpts: AxiosRequestConfig = {
    headers: {
        'User-Agent': 'hellobiczes',
        'x-youtube-client-name': 1,
        'x-youtube-client-version': '2.20200731.02.01'
    }
}

const baseURL = 'https://www.youtube.com';
let iAPIkey = '';

/**
 * Scraps youtube playlist metadata and all its videos
 * @param url URL or ID of the playlist you want to scrap
 * @param opts an optional YTFPSOptions object
 */
async function fetchFromPlaylist(url: string, opts: YTFPSOptions = {}) : Promise<YTPlaylist> {
    if(typeof opts.limit != 'undefined' && (typeof opts.limit != 'number' || isNaN(opts.limit) || opts.limit < 0))
        throw Error("Could not parse the limit option. Make sure it's an integer > 0, Infinity or undefined.");

    opts.limit = opts.limit ?? Infinity;
    let test = /[?&]list=([^#\&\?]+)|^([a-zA-Z0-9-_]+)$/.exec(url);
    if(!test)
        throw Error('Invalid playlist URL or ID');
    let playlistID = test[1] || test[2];
    let videos: YTvideo[] = [];
    let ytInitialData: any;

    try {
        let body = (await ax.get('https://youtube.com/playlist?list=' + encodeURI(playlistID), rqOpts)).data as string;
        iAPIkey = /"INNERTUBE_API_KEY":"(.*?)"/.exec(body)?.[1] as string;
        ytInitialData = JSON.parse(/(?:window\["ytInitialData"\])|(?:ytInitialData) =.*?({.*?});/s.exec(body)?.[1] || '{}');
    } catch {
        throw Error('Could not fetch/parse playlist');
    }

    if(!iAPIkey)
        throw Error('Could not extract internal API key');
    if(JSON.stringify(ytInitialData.alerts)?.includes("ERROR"))
        throw Error('This playlist is private or broken');
    if(!ytInitialData?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer?.contents?.[0]?.playlistVideoListRenderer)
        throw Error('Cannot find valid playlist JSON data. Is the playlist ID correct?');
    let listData = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer;
    let d = ytInitialData;

    let contToken: string = listData?.contents?.slice(-1)?.[0]?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token || '';
    if(listData.contents)
        videos.push(...parseVideosFromJson(listData.contents, opts));
    if(contToken && opts.limit > 0)
        videos.push(...(await getAllVideos(contToken, opts)));

    try {
        let mf = d.microformat.microformatDataRenderer;
        let si0 = d.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer;
        let si1 = d.sidebar.playlistSidebarRenderer.items[1]?.playlistSidebarSecondaryInfoRenderer.videoOwner.videoOwnerRenderer;
        return {
            title: mf.title,
            url: baseURL + '/playlist?list=' + listData.playlistId,
            id: listData.playlistId,
            video_count: +si0.stats[0].runs[0]?.text?.replace(/[^0-9]/g, ''),
            view_count: +si0.stats[1]?.simpleText?.replace(/[^0-9]/g, '') || 0,
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
        }
    } catch(e) {
        throw Error('Could not parse playlist metadata: ' + (e as Error)?.message);
    }
}

function parseVideosFromJson(videoDataArray: any[], opts: YTFPSOptions) : YTvideo[] {
    try {
        let videos: YTvideo[] = [];
        for(const vid of videoDataArray)
            try {
                if(opts.limit! <= 0)
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
                --opts.limit!;
            } catch {
                continue;
            }
        return videos;
    } catch {
        throw Error('Could not parse videos from videoData JSON');
    }
}

async function getAllVideos(ajax_url: string, opts: YTFPSOptions, videos: YTvideo[] = []) : Promise<YTvideo[]> {
    try {
        let ytAppendData = (await ax.post(baseURL + '/youtubei/v1/browse?key=' + iAPIkey, {"context":{"client":{"clientName":"WEB","clientVersion":"2.20210401.08.00"}},"continuation":ajax_url}, rqOpts)).data;
        let contToken: any = ytAppendData.onResponseReceivedActions?.[0]?.appendContinuationItemsAction?.continuationItems?.slice(-1)?.[0]?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
        videos.push(...parseVideosFromJson(ytAppendData.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems, opts));
        return (contToken && opts.limit! > 0) ? await getAllVideos(contToken, opts, videos) : videos;
    } catch {
        throw Error('An error has occured while trying to fetch more videos');
    }
}
