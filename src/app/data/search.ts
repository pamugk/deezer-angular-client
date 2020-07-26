export enum Strictness {
    ON = 'on',
    OFF = 'off'
}

export enum SearchOrdering {
    RANKING = "RANKING", 
    TRACK_ASC = "TRACK_ASC", 
    TRACK_DESC = "TRACK_DESC", 
    ARTIST_ASC = "ARTIST_ASC", 
    ARTIST_DESC = "ARTIST_DESC", 
    ALBUM_ASC = "ALBUM_ASC", 
    ALBUM_DESC = "ALBUM_DESC", 
    RATING_ASC = "RATING_ASC", 
    RATING_DESC = "RATING_DESC", 
    DURATION_ASC = "DURATION_ASC", 
    DURATION_DESC = "DURATION_DESC"
}

export class Search {
    //Search params
    q?: string;
    strict?: Strictness;
    order?: SearchOrdering;

    //Advanced search query
    artist?: string; //The artist name
    album?: string; //The album's title
    index?: number;
    track?: string; //The track's title
    label?: string; //The label name
    limit?: number;
    dur_min?: number; //The track's minimum duration in seconds
    dur_max?: number; //The track's maximum duration in seconds
    bpm_min?: number; //The track's minimum bpm
    bpm_max?: number; //The track's maximum bpm
}
