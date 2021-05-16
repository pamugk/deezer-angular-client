import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/data/track';

@Component({
  selector: 'track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.scss']
})
export class TrackTableComponent implements OnInit {
  @Input() public albumSpecific: Boolean;
  @Input() public disks: Map<number, Array<Track>>;
  @Input() public tracks: Array<Track>;

  constructor() { }

  ngOnInit(): void {
  }

}
