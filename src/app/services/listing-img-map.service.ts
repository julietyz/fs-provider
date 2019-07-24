import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingImgMapService {

  constructor(
    private httpClient: HttpClient

  ) { }



  create(newURL){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
  
      this.httpClient
      .post("http://localhost:5000/api/imgMap", newURL, {headers})
      .subscribe((response: any) => {
          console.log(response.id);
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


  deleteByListingID(listingID){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
  
      this.httpClient
      .post("http://localhost:5000/api/imgMap/deleteByListingID/" + listingID, {headers})
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

  deleteByListingIDAndURL(id, obj){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
  
      this.httpClient
      .post("http://localhost:5000/api/imgMap/deleteByListingIDAndURL/" + id, obj, {headers})
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
