import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/data/album';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() public albums: Array<Album>;

  constructor() { }

  ngOnInit(): void {
  }

}
