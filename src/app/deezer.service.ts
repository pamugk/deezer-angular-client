import { Injectable } from '@angular/core';

import { Editorial } from './data/editorial';
import { SearchResult } from './data/search-result';
import { User } from './data/user';

declare var DZ: any;

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  user: User;

  constructor() { }

  getLoginStatus() {
  }

  getChannels(handler: (this: void, channels: SearchResult<Editorial>) => void) {
    DZ.api('/editorial', handler);
  }

  isLoggedIn():boolean {
    return false;
  }

  login() {

  }

  logout() {

  }
}
