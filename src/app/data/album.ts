import { Artist } from "./artist";
import { Explicity } from "./explicity.enum";
import { Genre } from "./genre";
import { Track } from "./track";

export class Album {
    id: number; //The Deezer album id
    title: string; //The album title
    upc: string; //The album UPC
    link: URL; //The url of the album on Deezer
    share: URL; //The share link of the album on Deezer
    cover: URL; //The url of the album's cover
    cover_small: URL; //The url of the album's cover in size small
    cover_medium: URL; //The url of the album's cover in size medium
    cover_big: URL; //The url of the album's cover in size big
    cover_xl: URL; //The url of the album's cover in size xl
    genre_id: number; //The album's first genre id (You should use the genre list instead). NB : -1 for not found
    genres: Array<Genre>; //List of genre object
    label: string; //The album's label name
    nb_tracks: number; //Count of tracks
    duration: number; //The album's duration (seconds)
    fans: number; //The number of album's Fans
    rating:	number; //The album's rate
    release_date: Date; //The album's release date
    record_type: string; //The record type of the album (EP / ALBUM / etc..)
    available: boolean;
    alternative: Album; //Return an alternative album object if the current album is not available
    tracklist: URL; //API Link to the tracklist of this album
    explicit_lyrics: boolean; //Whether the album contains explicit lyrics
    explicit_content_lyrics: Explicity; //The explicit content lyrics values
    explicit_content_cover:	Explicity; //The explicit cover values
    contributors:	Array<Artist>; //Return a list of contributors on the album
    artist:	Artist; //Artist object containing : id, name, picture, picture_small, picture_medium, picture_big, picture_xl
    tracks:	Array<Track>; //List of track
}
