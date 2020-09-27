import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/data/track';
import { SearchResult } from 'src/app/data/search-result';
import { SearchService } from '../search.service';
import { DeezerService } from 'src/app/deezer.service';
import { Search, SearchOrdering, Strictness } from 'src/app/data/search';

@Component({
  selector: 'search-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks: SearchResult<Track>;
  private index: number = 0;
  private limit: number = 50;

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
    this.deezer.searchTracks(this.request(), (tracks) => this.tracks = tracks);
  }

  prev():void {
    this.tracks.data = undefined;
    this.index -= this.limit;
    this.deezer.searchTracks(this.request(), (tracks) => this.tracks = tracks);
  }

  next():void {
    this.tracks.data = undefined;
    this.index += this.limit;
    this.deezer.searchTracks(this.request(), (tracks) => this.tracks = tracks);
  }
}
