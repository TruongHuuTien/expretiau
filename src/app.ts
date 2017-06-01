import {HttpClient} from 'aurelia-fetch-client';

export class App {
  constructor() {
    this.request();
  }

  request() {
    let httpClient = new HttpClient();

    httpClient.fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
}
