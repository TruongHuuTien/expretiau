import {HttpClient} from 'aurelia-fetch-client';

function createUrl(parameters) {
  var url: string = '';
  var paramsUrl = [];

  url += parameters.url;
  if (parameters.fields !== undefined || parameters.quantity !== undefined) {
    url += "?";
  }
  if (parameters.fields !== undefined) {
    paramsUrl.push('inc=' + parameters.fields.join(","));
  }
  if (parameters.quantity !== undefined) {
    paramsUrl.push('results=' + parameters.quantity);
  }
  url += paramsUrl.join("&");

  return url;
}

export class User {
  public name: {
    first: string,
    last: string
  }
  constructor(data) {
    this.name = {
      first: data.name.first,
      last: data.name.last
    }
  }

 static fetchUsers() {
   const requestParameters = {
     url :'https://randomuser.me/api/',
     fields : ['name'],
     quantity : 10
   }

   const promise = new Promise((resolve, reject) => {
     const httpClient = new HttpClient();
     httpClient.fetch(createUrl(requestParameters))
      .then(response => response.json())
      .then(data => {
        var users = [];
          for (let res of data.results) {
            let user = new User(res);
            users.push(user);
          }
        resolve(users);
      }).catch(err => {
        reject(new Error(err));
      });
   });

   return promise;
 }
}
