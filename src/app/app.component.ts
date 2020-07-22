import { Component } from '@angular/core';
import { DeezerService } from './deezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search: string = "";

  constructor (
    private router: Router,
    public readonly deezer: DeezerService
  ) { }

  clearSearch() {
    this.search = "";
  }

  startSearch() {
    if (this.search)
      this.router.navigate(["/search", this.search]);
  }
}
