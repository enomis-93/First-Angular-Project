import { Iuser } from '../Interfaces/iuser';

export class User implements Iuser {
  id: number;
  name: string;
  surname: string;
  gender: string;
  age: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.surname = '';
    this.gender = '';
    this.age = 0;
  }
}
