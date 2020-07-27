import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/data/artist';
import { SearchResult } from 'src/app/data/search-result';
import { SearchService } from '../search.service';
import { DeezerService } from 'src/app/deezer.service';
import { Search, SearchOrdering, Strictness } from 'src/app/data/search';

@Component({
  selector: 'search-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: SearchResult<Artist>;
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
    this.deezer.searchArtists(this.request(), (artists) => this.artists = artists);
  }

  prev():void {
    this.artists.data = undefined;
    this.index -= this.limit;
    this.deezer.searchArtists(this.request(), (artists) => this.artists = artists);
  }

  next():void {
    this.artists.data = undefined;
    this.index += this.limit;
    this.deezer.searchArtists(this.request(), (artists) => this.artists = artists);
  }
}
