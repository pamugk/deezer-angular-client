import { Component } from '@angular/core';
import { DeezerService } from './deezer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search: string = "";

  constructor (public readonly service: DeezerService) { }

  clearSearch() {
    this.search = "";
  }

  startSearch() {
    if (this.search) {
      console.log(`Searching for ${this.search}`);
      this.search = "";
    }
  }
}
