import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/data/search-result';
import { Album } from 'src/app/data/album';
import { SearchService } from '../search.service';
import { DeezerService } from 'src/app/deezer.service';
import { Search, SearchOrdering, Strictness } from 'src/app/data/search';

@Component({
  selector: 'search-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels: SearchResult<Album>;
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
    this.deezer.searchAlbums(this.request(), (channels) => this.channels = channels);
  }

  prev():void {
    this.channels.data = undefined;
    this.index -= this.limit;
    this.deezer.searchAlbums(this.request(), (channels) => this.channels = channels);
  }

  next():void {
    this.channels.data = undefined;
    this.index += this.limit;
    this.deezer.searchAlbums(this.request(), (channels) => this.channels = channels);
  }
}
