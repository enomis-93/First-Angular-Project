import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  public users: User[] = [];
  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.users = this.UserService.getUsers();
  }
}
