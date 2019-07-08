
import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  // This should be type of user to make life a whole lot easier(use listings model as a guide):
  providers: Array<Provider>;
  loggedInProvider: Provider;

  constructor() {
    this.providers = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        password: '123'
      },
      {
        firstName: 'Samantha',
        lastName: 'Right',
        email: 'sam@mail.com',
        password: '123'
      },
      {
        firstName: 'Julia',
        lastName: 'Richards',
        email: 'julia@mail.com',
        password: '123'
      },
    ];
  }

  public logIn(AuthProvider: any) { // This should be type user

    return new Promise((resolve, reject) => {

      // Please note that this will call the API noce we have created it - But for now:
      const provider: any = this.providers.filter(dbProvider => {
        return dbProvider.email === AuthProvider.email;
      });

      // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
      if (provider.length) {
        if (AuthProvider.password === provider[0].password) {
          this.setLoggedInUser(provider[0]);
          window.localStorage.setItem('firstName', provider[0].firstName);
          resolve(provider[0]);
        } else {
          reject(new Error('Incorrect password'));
        }
      } else {
        reject(new Error("User doesn't exist"));
      }

    });

  }

  setLoggedInUser(user: any) { // This should be type user
    this.loggedInProvider = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInProvider;
  }

}

