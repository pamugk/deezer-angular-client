import { Injectable } from '@angular/core';

import { SearchResult } from 'src/app/data/search-result';
import { Album } from 'src/app/data/album';
import { Artist } from 'src/app/data/artist';
import { Playlist } from 'src/app/data/playlist';
import { Radio } from 'src/app/data/radio';
import { User } from 'src/app/data/user';
import { Track } from 'src/app/data/track'

@Injectable()
export class SearchService {
  query: string;

  albums: SearchResult<Album>;
  artists: SearchResult<Artist>;
  playlists: SearchResult<Playlist>;
  radios: SearchResult<Radio>;
  tracks: SearchResult<Track>;
  users: SearchResult<User>;

  constructor() { }

  hasTracks(): boolean {
    return this.tracks && this.tracks.total > 0;
  }

  hasAlbums(): boolean {
    return this.albums && this.albums.total > 0;
  }

  hasPlaylists(): boolean {
    return this.playlists && this.playlists.total > 0;
  }

  hasRadios(): boolean {
    return this.radios && this.radios.total > 0;
  }

  hasArtists(): boolean {
    return this.artists && this.artists.total > 0;
  }

  hasUsers(): boolean {
    return this.users && this.users.total > 0;
  }

  nothingFound(): boolean {
    return this.albums.total == 0 &&
      this.artists.total == 0 && 
      this.playlists.total == 0 && 
      this.radios.total == 0 && 
      this.tracks.total == 0 && 
      this.users.total == 0;
  }

  loading(): boolean {
    return !this.albums || 
      !this.artists || 
      !this.playlists || 
      !this.radios || 
      !this.tracks || 
      !this.users;
  }
}
