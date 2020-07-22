import { Component, OnInit } from '@angular/core';
import { DeezerService } from 'src/app/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public readonly deezer: DeezerService) { }

  ngOnInit(): void {
  }

}
