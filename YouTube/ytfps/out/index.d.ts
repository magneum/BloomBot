import { YTFPSOptions, YTPlaylist } from './interfaces';
export = fetchFromPlaylist;
/**
 * Scraps youtube playlist metadata and all its videos
 * @param url URL or ID of the playlist you want to scrap
 * @param opts an optional YTFPSOptions object
 */
declare function fetchFromPlaylist(url: string, opts?: YTFPSOptions): Promise<YTPlaylist>;
//# sourceMappingURL=index.d.ts.map