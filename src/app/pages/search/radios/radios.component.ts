import { Component, OnInit } from '@angular/core';
import { Radio } from 'src/app/data/radio';
import { SearchResult } from 'src/app/data/search-result';
import { SearchService } from '../search.service';
import { DeezerService } from 'src/app/deezer.service';
import { Search, SearchOrdering, Strictness } from 'src/app/data/search';

@Component({
  selector: 'search-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {
  radios: SearchResult<Radio>;
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
    this.deezer.searchRadios(this.request(), (radios) => this.radios = radios);
  }

  prev():void {
    this.radios.data = undefined;
    this.index -= this.limit;
    this.deezer.searchRadios(this.request(), (radios) => this.radios = radios);
  }

  next():void {
    this.radios.data = undefined;
    this.index += this.limit;
    this.deezer.searchRadios(this.request(), (radios) => this.radios = radios);
  }
}
