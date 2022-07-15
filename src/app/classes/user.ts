import { Iuser } from '../Interfaces/iuser';

export class User implements Iuser {
  name: string;
  surname: string;
  gender: string;
  age: number;

  constructor() {
    this.name = '';
    this.surname = '';
    this.gender = '';
    this.age = 0;
  }
}
