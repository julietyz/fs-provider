import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private httpClient: HttpClient

  ) { }


  getByListingId(listingId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .get("http://localhost:5000/api/booking/getByListingID/" + listingId, {headers})
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

  update(updatedBooking){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
  
      this.httpClient
      .post("http://localhost:5000/api/booking/updateByID", updatedBooking, {headers})
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


  deleteByListingID(listingId){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
  
      this.httpClient
      .post("http://localhost:5000/api/booking/deleteByListingID/" + listingId, {headers})
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

}
