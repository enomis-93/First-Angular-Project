import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-first-project';
  showForm: boolean = false;
  userSelected!: User;

  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }
}
