import { Injectable } from '@angular/core';

import { Album } from './data/album';
import { Artist } from './data/artist';
import { Chart } from './data/chart';
import { Comment } from './data/comment';
import { Editorial } from './data/editorial';
import { Genre } from './data/genre';
import { Playlist } from './data/playlist';
import { Radio } from './data/radio';
import { Search } from './data/search';
import { SearchResult } from './data/search-result';
import { Track } from './data/track';
import { User } from './data/user';

declare var DZ: any;

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  user: User;

  constructor() { }

  getLoginStatus() {
  }

  requestChannels(handler: (this: void, channels: SearchResult<Editorial>) => void):void {
    DZ.api('/editorial', handler);
  }

  isLoggedIn():boolean {
    return false;
  }

  login():void {

  }

  logout():void {

  }

  requestAlbum(id:number, handler: (this: void, album: Album) => void):void {
    DZ.api(`/album/${id}`, handler);
  }

  requestAlbumComments(id:number, handler: (this: void, comments: SearchResult<Comment>) => void):void {
    DZ.api(`/album/${id}/comments`, handler);
  }

  requestAlbumTracks(
    id:number, 
    handler: (this: void, comments: SearchResult<Track>) => void, 
    params: Search = new Search()
  ):void {
    DZ.api(`/album/${id}/tracks`, 'GET', params, handler);
  }

  requestArtist(id: number, handler: (this: void, artist: Artist) => void):void {
    DZ.api(`/artist/${id}`, handler);
  }

  requestArtistDiscography(
    id: number, 
    handler: (this:void, albums: SearchResult<Album>) => void,
    params: Search = new Search()
  ):void {
    DZ.api(`/artist/${id}/albums`, 'GET', params, handler);
  }

  requestArtistRelated(
    id: number, 
    handler: (this:void, relatedAritsts: SearchResult<Artist>) => void,
    params: Search = new Search()
  ):void {
    DZ.api(`/artist/${id}/related`, 'GET', params, handler);
  }

  searchAlbums(query: Search, handler: (this: void, channels: SearchResult<Album>) => void):void {
    DZ.api('/search/album', 'GET', query, handler);
  }

  searchArtists(query: Search, handler: (this: void, channels: SearchResult<Artist>) => void):void {
    DZ.api('/search/artist', 'GET', query, handler)
  }

  searchPlaylists(query: Search, handler: (this: void, channels: SearchResult<Playlist>) => void):void {
    DZ.api('/search/playlist', 'GET', query, handler)
  }

  searchRadios(query: Search, handler: (this: void, channels: SearchResult<Radio>) => void):void {
    DZ.api('/search/radio', 'GET', query, handler)
  }

  searchTracks(query: Search, handler: (this: void, channels: SearchResult<Track>) => void):void {
    DZ.api('/search/track', 'GET', query, handler)
  }

  searchUsers(query: Search, handler: (this: void, channels: SearchResult<User>) => void):void {
    DZ.api('/search/user', 'GET', query, handler)
  }
}
