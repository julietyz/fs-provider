import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { NavController } from '@ionic/angular';
import { ListingImgMapService } from '../services/listing-img-map.service';
import { AlertController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';





@Component({
  selector: 'app-prop-deets',
  templateUrl: './prop-deets.page.html',
  styleUrls: ['./prop-deets.page.scss'],
})
export class PropDeetsPage implements OnInit {

  public listingId: string;
  public listings: any;

  public bookings: any;


  constructor(    
    private alertctl: AlertController,
    private navCtrl: NavController,
    private listingService: ListingService,
    private listingImgMapService: ListingImgMapService,
    private bookingService: BookingService,


  ) { 

    this.listingId = window.localStorage.getItem("listingid");

  }

  ngOnInit() {
    this.listingService.getById(this.listingId).then(res=>{
      this.listings = res;
      console.log(res);
    }).catch(err => {console.log(err)})

    this.bookingService.getByListingId(this.listingId).then(res=>{
      this.bookings = res;
      console.log(this.bookings);
    }).catch(err => {console.log(err)})


  }

  deleteListing(listingId){
    console.log("delete");

    this.listingImgMapService.deleteByListingID(listingId).then(res=>{
    }).catch(err => {console.log(err)})

    this.bookingService.deleteByListingID(listingId).then(res=>{
    }).catch(err => {console.log(err)})

    this.listingService.delete(listingId).then(res=>{
      //console.log(res);
      this.navCtrl.navigateForward("profile");

    }).catch(err => {console.log(err)})

  }

  editListing(){
    this.navCtrl.navigateForward("edit-rental");
  }

  accept(booking){
    console.log("accept");

    const updatedBooking = {
      bookingID: booking.bookingID,
      listingID: this.listingId,
      userID: booking.userID,
      dateFrom: booking.dateFrom,
      dateTo: booking.dateTo,
      status: "Accepted"
    };

    console.log(updatedBooking);
     this.bookingService.update(updatedBooking).then(res=>{
      console.log(res);
    }).catch(err => {
      this.presentAlert(err);
    });  

  }

  deny(booking){
    console.log("deny");

    const updatedBooking = {
      bookingID: booking.bookingID,
      listingID: this.listingId,
      userID: booking.userID,
      dateFrom: booking.dateFrom,
      dateTo: booking.dateTo,
      status: "Denied"
    };

    console.log(updatedBooking);
     this.bookingService.update(updatedBooking).then(res=>{
      console.log(res);
    }).catch(err => {
      this.presentAlert(err);
    });  
  }
  /* editListing(){
    console.log("edit");

    const updatedListing = {
      name: this.name,
      location: this.location,
      price: this.price,
      description: this.description
    }

    this.listingService.create(updatedListing).then(res=>{
    }).catch(err => {
      this.presentAlert(err);
    });

  }
*/
  async presentAlert(err) {
    const alert = await this.alertctl.create({
      header: 'Alert',
      subHeader: 'Failed to register',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  } 

}
