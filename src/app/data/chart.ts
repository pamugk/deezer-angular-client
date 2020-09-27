import { Album } from "./album";
import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Track } from "./track";

export class Chart {
    id: number;
    tracks: Array<Track>; //List of track
    albums: Array<Album>; //List of album
    artists: Array<Artist>; //List of artist
    playlists: Array<Playlist>; //List of playlist
}
