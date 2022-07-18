import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  public users: User[] = [];

  @Output() updateUser = new EventEmitter();
  @Output() addNewUser = new EventEmitter();
  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.users = this.UserService.getUsers();
  }

  onDeleteUser(user: User) {
    let confirmDelete = confirm(
      `Vuoi proseguire con l'elimazione dell'utente "${
        user.name + ' ' + user.surname
      }" ?`
    );
    if (confirmDelete) {
      this.UserService.deleteUser(user);
    }
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

  onAddNewUser() {
    this.addNewUser.emit();
  }
}
