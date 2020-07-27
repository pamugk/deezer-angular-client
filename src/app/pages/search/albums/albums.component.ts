import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Album } from 'src/app/data/album';
import { SearchResult } from 'src/app/data/search-result';
import { DeezerService } from 'src/app/deezer.service';
import { SearchOrdering, Strictness, Search } from 'src/app/data/search';

@Component({
  selector: 'search-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: SearchResult<Album>;
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
      strict: Strictness.ON
    };
  } 

  ngOnInit(): void {
    this.deezer.searchAlbums(this.request(), (albums) => this.albums = albums);
  }

  prev():void {
    this.albums.data = undefined;
    this.index -= this.limit;
    this.deezer.searchAlbums(this.request(), (albums) => this.albums = albums);
  }

  next():void {
    this.albums.data = undefined;
    this.index += this.limit;
    this.deezer.searchAlbums(this.request(), (albums) => this.albums = albums);
  }
}
