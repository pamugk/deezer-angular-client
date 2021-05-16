import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/data/track';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() public tracks: Array<Track>;

  constructor() { }

  ngOnInit(): void {
  }

}
