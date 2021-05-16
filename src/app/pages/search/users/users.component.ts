import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/data/search-result';
import { User } from 'src/app/data/user';
import { SearchService } from '../search.service';
import { DeezerService } from 'src/app/deezer.service';
import { Search, SearchOrdering, Strictness } from 'src/app/data/search';

@Component({
  selector: 'search-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: SearchResult<User>;
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
    this.deezer.searchUsers(this.request(), (users) => this.users = users);
  }

  onScroll():void {
  }

  prev():void {
    this.users.data = undefined;
    this.index -= this.limit;
    this.deezer.searchUsers(this.request(), (users) => this.users = users);
  }

  next():void {
    this.users.data = undefined;
    this.index += this.limit;
    this.deezer.searchUsers(this.request(), (users) => this.users = users);
  }
}
