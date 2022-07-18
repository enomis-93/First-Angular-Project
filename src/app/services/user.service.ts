import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Array<User> = [
    {
      id: 1,
      name: 'Simone',
      surname: 'Bianchi',
      gender: 'Male',
      age: 20,
    },
    {
      id: 2,
      name: 'Maria',
      surname: 'Rossi',
      gender: 'Female',
      age: 23,
    },
    {
      id: 3,
      name: 'Federico',
      surname: 'Neri',
      gender: 'Male',
      age: 35,
    },
    {
      id: 4,
      name: 'Rossana',
      surname: 'Gialli',
      gender: 'Female',
      age: 45,
    },
    {
      id: 5,
      name: 'Samuele',
      surname: 'Rossini',
      gender: 'Male',
      age: 38,
    },
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  // Aggiorna dati dell'utente
  updateUser(user: User) {
    let userIndex = this.users.findIndex((u) => u.id == user.id);
    if (userIndex != -1) {
      this.users[userIndex] = { ...user };
    }
  }

  addUser(user: User) {}
}
