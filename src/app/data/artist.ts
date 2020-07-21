export class Artist {
    id: number; //The artist's Deezer id
    name: string; //The artist's name
    link: URL; //The url of the artist on Deezer
    share: URL; //The share link of the artist on Deezer
    picture: URL; //The url of the artist picture
    picture_small: URL; //The url of the artist picture in size small
    picture_medium:	URL; //The url of the artist picture in size medium
    picture_big: URL; //The url of the artist picture in size big
    picture_xl: URL; //The url of the artist picture in size xl
    nb_album: number; //The number of artist's albums
    nb_fan: number; //The number of artist's fans
    radio: boolean; //true if the artist has a smartradio
    tracklist: URL; //API Link to the top of this artist
}
