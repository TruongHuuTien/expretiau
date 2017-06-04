import {User} from './user';

export class App {
  users: any;
  userRequest: any;

  constructor() {
    this.users = [];
    this.userRequest = User.fetchUsers();
    this.userRequest.then((users) => {
      this.users = users;
    });
  }
}
