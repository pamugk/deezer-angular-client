import { Component, OnInit } from '@angular/core';

import { DeezerService } from 'src/app/deezer.service';

import { Editorial } from 'src/app/data/editorial';
import { SearchResult } from 'src/app/data/search-result';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels: SearchResult<Editorial>;

  constructor(private deezer: DeezerService) { }

  ngOnInit(): void {
    this.deezer.requestChannels((channels) => this.channels = channels);
  }
}
