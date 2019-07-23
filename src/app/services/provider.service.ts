
import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  // This should be type of user to make life a whole lot easier(use listings model as a guide):
  providers: Array<Provider>;
  loggedInProvider: Provider;

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getById(providerId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .get("http://localhost:5000/api/provider/getByID/" + providerId, {headers})
      .subscribe((response) => {
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          reject(err);
        }
      );

    });
  }

  setLoggedInUser(user: any) { // This should be type user
    this.loggedInProvider = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInProvider;
  }

}

