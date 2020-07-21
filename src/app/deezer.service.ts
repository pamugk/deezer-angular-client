import { Injectable } from '@angular/core';
import { User } from './data/user';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  user: User;

  constructor() { }

  getLoginStatus() {
  }

  isLoggedIn():boolean {
    return false;
  }

  login() {

  }

  logout() {

  }
}
