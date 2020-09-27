import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/data/artist';

@Component({
  selector: 'artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  @Input() public artists: Array<Artist>;

  constructor() { }

  ngOnInit(): void {
  }

}
