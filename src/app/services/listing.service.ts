import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private httpClient: HttpClient

  ) { }


  getById(listingId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .get("http://localhost:5000/api/listing/getByID/" + listingId, {headers})
      .subscribe((response: any) => {
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          reject(err);
        }
      );

    });

    

}

getByProviderId(providerId){
  return new Promise((resolve, reject) => {
    const headers = new HttpHeaders();

    this.httpClient
    .get("http://localhost:5000/api/listing/getByProviderID/" + providerId, {headers})
    .subscribe((response: any) => {
        //localStorage.setItem('listingid', response.insertId);
        resolve(response);
      },
      (err) => {
        console.log(err.error.message);
        reject(err);
      }
    );

  });
}

create(newListing){
  return new Promise((resolve, reject) => {
    const headers = new HttpHeaders();

    this.httpClient
    .post("http://localhost:5000/api/listing", newListing, {headers})
    .subscribe((response: any) => {
        console.log(response.insertId);
        localStorage.setItem('listingid', response.insertId);
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

delete(listingId){
  return new Promise((resolve, reject) => {
    const headers = new HttpHeaders();

    this.httpClient
    .post("http://localhost:5000/api/listing/delete/" + listingId, {headers})
    .subscribe((response: any) => {
        console.log(response);
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

edit(updatedListing){
  return new Promise((resolve, reject) => {
    const headers = new HttpHeaders();

    this.httpClient
    .post("http://localhost:5000/api/listing/updateByID", updatedListing, {headers})
    .subscribe((response: any) => {
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
