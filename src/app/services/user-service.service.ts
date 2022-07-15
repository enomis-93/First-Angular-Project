import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  users = [
    {
      name: 'Simone',
      surname: 'Bianchi',
      gender: 'Male',
      age: 20,
    },
    {
      name: 'Maria',
      surname: 'Rossi',
      gender: 'Female',
      age: 23,
    },
    {
      name: 'Federico',
      surname: 'Neri',
      gender: 'Male',
      age: 35,
    },
    {
      name: 'Rossana',
      surname: 'Gialli',
      gender: 'Female',
      age: 45,
    },
    {
      name: 'Samuele',
      surname: 'Rossini',
      gender: 'Male',
      age: 38,
    },
  ];
  constructor() {}

  getUser() {
    return this.users;
  }
}
