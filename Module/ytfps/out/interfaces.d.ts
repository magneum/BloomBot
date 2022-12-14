export interface YTPlaylist {
    title: string;
    url: string;
    id: string;
    video_count: number;
    view_count?: number;
    description: string;
    isUnlisted: boolean;
    isAlbum: boolean;
    thumbnail_url: string;
    author?: {
        name: string;
        url: string;
        avatar_url: string;
    };
    videos: YTvideo[];
}
export interface YTvideo {
    title: string;
    url: string;
    id: string;
    length: string;
    milis_length: number;
    thumbnail_url: string;
    author: {
        name: string;
        url: string;
    };
}
export interface YTFPSOptions {
    limit?: number;
}
//# sourceMappingURL=interfaces.d.ts.map