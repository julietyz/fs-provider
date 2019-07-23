import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderAuthService {

  constructor(
    private httpClient: HttpClient

  ) { }

  login(authProvider){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .post("http://localhost:5000/api/providerauth/login", authProvider, {headers})
      .subscribe((response: any) => {
          console.log(response.id);
          localStorage.setItem('providerid', response.id);
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          console.log(err.error);
          reject(err.error);
        }
      );

    });
  }


  register(newProvider){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .post("http://localhost:5000/api/providerauth/register", newProvider, {headers})
      .subscribe((response: any) => {
          console.log(response);
          console.log(response.insertId);
          localStorage.setItem('providerid', String(response.insertId));
          resolve(response);
        },

        (err) => {
          console.log(err.error.message);
          console.log(err.error);
          reject(err.error);
        }
      );

    });
  }

}
