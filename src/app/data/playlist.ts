import { Track } from "./track";
import { User } from "./user";

export class Playlist {
    id: number; //The playlist's Deezer id
    title: string; //The playlist's title
    description: string; //The playlist description
    duration: number; //The playlist's duration (seconds)
    public: boolean; //If the playlist is public or not
    is_loved_track: boolean; //If the playlist is the love tracks playlist
    collaborative: boolean; //If the playlist is collaborative or not
    rating: number; //The playlist's rate
    nb_tracks: number; //Nb tracks in the playlist
    unseen_track_count: number; //Nb tracks not seen
    fans: number; //The number of playlist's fans
    link: URL; //The url of the playlist on Deezer
    share: URL; //The share link of the playlist on Deezer
    picture: URL; //The url of the playlist's cover
    picture_small: URL; //The url of the playlist's cover in size small
    picture_medium: URL; //The url of the playlist's cover in size medium
    picture_big: URL; //The url of the playlist's cover in size big
    picture_xl: URL; //The url of the playlist's cover in size xl
    checksum: string; //The checksum for the track list
    creator: User; //User object containing : id, name
    tracks: Array<Track>; //list of track
}
