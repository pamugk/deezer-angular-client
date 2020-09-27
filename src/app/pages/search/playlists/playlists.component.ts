import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/data/playlist';
import { SearchResult } from 'src/app/data/search-result';
import { SearchService } from '../search.service';
import { DeezerService } from 'src/app/deezer.service';
import { Search, SearchOrdering, Strictness } from 'src/app/data/search';

@Component({
  selector: 'search-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: SearchResult<Playlist>;
  private index: number = 0;
  private limit: number = 25;

  constructor(
    private overview: SearchService,
    private deezer: DeezerService
  ) { }

  private request():Search{
    return{
      q: this.overview.query,
      order: SearchOrdering.RANKING,
      limit: this.limit,
      index:this.index,
      strict: Strictness.ON
    };
  } 

  ngOnInit(): void {
    this.deezer.searchPlaylists(this.request(), (playlists) => this.playlists = playlists);
  }

  prev():void {
    this.playlists.data = undefined;
    this.index -= this.limit;
    this.deezer.searchPlaylists(this.request(), (playlists) => this.playlists = playlists);
  }

  next():void {
    this.playlists.data = undefined;
    this.index += this.limit;
    this.deezer.searchPlaylists(this.request(), (playlists) => this.playlists = playlists);
  }

}
