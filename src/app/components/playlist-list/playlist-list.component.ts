import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/data/playlist';

@Component({
  selector: 'playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  @Input() public playlists: Array<Playlist>;

  constructor() { }

  ngOnInit(): void {
  }

}
