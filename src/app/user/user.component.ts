import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteUser() {
    this.onDeleteUser.emit(this.user);
  }

  updateUser() {
    console.log(this.user);
    this.onSelectUser.emit(this.user);
  }
}
