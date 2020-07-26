import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DeezerService } from 'src/app/deezer.service';
import { Search } from 'src/app/data/search';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private deezer: DeezerService,
    public overview: SearchService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('query'))
    )
    .subscribe(data=> {
      this.overview.query = `${data}`;

      this.overview.albums = undefined;
      this.overview.artists = undefined;
      this.overview.playlists = undefined;
      this.overview.radios = undefined;
      this.overview.tracks = undefined;
      this.overview.users = undefined;

      const request: Search = {
         q: this.overview.query,
         limit: 5
      };

      this.deezer.searchAlbums(request, (albums) => this.overview.albums = albums);
      this.deezer.searchArtists(request, (artists) => this.overview.artists = artists);
      this.deezer.searchPlaylists(request, (playlists) => this.overview.playlists = playlists);
      this.deezer.searchRadios(request, (radios) => this.overview.radios = radios);
      this.deezer.searchTracks(request, (tracks) => this.overview.tracks = tracks);
      this.deezer.searchUsers(request, (users) => this.overview.users = users);
    });
  }
}
