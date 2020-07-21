import { SearchOrdering } from "./search-ordering.enum";

export class Search {
    //Search params
    query: string;
    strict: Boolean;
    order: SearchOrdering;

    //Advanced search query
    artist: string; //The artist name
    album: string; //The album's title
    track: string; //The track's title
    label: string; //The label name
    dur_min: number; //The track's minimum duration in seconds
    dur_max: number; //The track's maximum duration in seconds
    bpm_min: number; //The track's minimum bpm
    bpm_max: number; //The track's maximum bpm
}
