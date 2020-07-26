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

  getChannels(handler: (this: void, channels: SearchResult<Editorial>) => void) {
    DZ.api('/editorial', handler);
  }

  isLoggedIn():boolean {
    return false;
  }

  login() {

  }

  logout() {

  }

  searchAlbums(query: Search, handler: (this: void, channels: SearchResult<Album>) => void) {
    DZ.api('/search/album', 'GET', query, handler);
  }

  searchArtists(query: Search, handler: (this: void, channels: SearchResult<Artist>) => void) {
    DZ.api('/search/artist', 'GET', query, handler)
  }

  searchPlaylists(query: Search, handler: (this: void, channels: SearchResult<Playlist>) => void) {
    DZ.api('/search/playlist', 'GET', query, handler)
  }

  searchRadios(query: Search, handler: (this: void, channels: SearchResult<Radio>) => void) {
    DZ.api('/search/radio', 'GET', query, handler)
  }

  searchTracks(query: Search, handler: (this: void, channels: SearchResult<Track>) => void) {
    DZ.api('/search/track', 'GET', query, handler)
  }

  searchUsers(query: Search, handler: (this: void, channels: SearchResult<User>) => void) {
    DZ.api('/search/user', 'GET', query, handler)
  }
}
