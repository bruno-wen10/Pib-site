
export interface Video {
  id: number;
  titulo: string;
  thumbnail: string;
  url: string;
  destaque?: boolean;
}

// Objeto retornado quando Busca Videos Rescentes no Canal
export interface YouTubeSearchVideos {
 kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    etag: string;
    id: {
      kind: string;
      videoId?: string;
      channelId?: string;
      playlistId?: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: { url: string; width?: number; height?: number };
        medium?: { url: string; width?: number; height?: number };
        high?: { url: string; width?: number; height?: number };
      };
      channelTitle: string;
      liveBroadcastContent: 'live' | 'upcoming' | 'none';
      publishTime?: string;
    };
  }[];
}

//Objeto retornado quando Verifica transmissão ao vivo no canal
export interface YouTubeSearchLives {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeSearchResult[];
}