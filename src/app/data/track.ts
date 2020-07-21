import { Album } from "./album";
import { Artist } from "./artist";
import { Explicity } from "./explicity.enum";

export class Track {
    id: number; //The track's Deezer id
    readable: boolean; //true if the track is readable in the player for the current user
    title: string; //The track's full title
    title_short: string; //The track's short title
    title_version: string; //The track version
    unseen: boolean; //The track unseen status	
    isrc: string; //The track isrc
    link: URL; //The url of the track on Deezer
    share: URL; //The share link of the track on Deezer
    duration: number; //The track's duration in seconds
    track_position: number; //The position of the track in its album
    disk_number: number; //The track's album's disk number
    rank: number; //The track's Deezer rank
    release_date: Date; //The track's release date
    explicit_lyrics: boolean; //Whether the track contains explicit lyrics
    explicit_content_lyrics: Explicity; //The explicit content lyrics values
    explicit_content_cover: Explicity; //The explicit cover value
    preview: URL; //The url of track's preview file. This file contains the first 30 seconds of the track
    bpm: number; //Beats per minute
    gain: number; //Signal strength
    available_countries: Array<string>; //List of countries where the track is available
    alternative: Track; //Return an alternative readable track if the current track is not readable
    contributors: Array<Artist>; //Return a list of contributors on the track
    artist: Artist; //Artist object containing : id, name, link, share, picture, picture_small, picture_medium, picture_big, picture_xl, nb_album, nb_fan, radio, tracklist, role
    album: Album; //Album object containing : id, title, link, cover, cover_small, cover_medium, cover_big, cover_xl, release_date
}
