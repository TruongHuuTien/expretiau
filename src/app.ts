import {User} from './user';

export class App {
  users: any;

  constructor() {
    this.users = [{
      name: {
        first: "Toto",
        last: "Toto"
      }
    }]
    User.fetchUsers().then((users) => {
      this.users = users;
    });
  }
}
