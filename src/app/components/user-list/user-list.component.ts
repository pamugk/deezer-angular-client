import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/data/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() public users: Array<User>;

  constructor() { }

  ngOnInit(): void {
  }

}
