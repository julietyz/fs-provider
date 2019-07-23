import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
import { ListingImgMapService } from '../services/listing-img-map.service';





@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss'],
})
export class NewRentalPage implements OnInit {

  name: string;
  location: string;
  price: string;
  description: string;
  providerId: string;
  imageURLInput: string;
  listingId: string;

  constructor(
    private navCtrl: NavController,
    private alertctl: AlertController,
    private listingService: ListingService,
    private listingImgMapService: ListingImgMapService,


  ) { 
    this.providerId = window.localStorage.getItem('providerid');


  }

  ngOnInit() {
  }

  navToProfile(){
    this.navCtrl.navigateForward("profile");
  }

  createListing(){

    const newListing = {
      providerID: this.providerId,
      name: this.name,
      location: this.location,
      price: this.price,
      description: this.description
    }

    const img = this.imageURLInput;

    this.listingService.create(newListing).then(res=>{
      console.log(res);
      this.listingId = window.localStorage.getItem('listingid');
      console.log(this.listingId);
      console.log(img);
      this.createURL(this.listingId, img);
      this.navCtrl.navigateForward('profile');
    }).catch(err => {
      this.presentAlert(err);
    });

  }

  createURL(listId, image){
    const newUrl = {
      listingID: listId,
      imageURL: image
    }

    this.listingImgMapService.create(newUrl).then(res=>{
      console.log(res);
      this.navCtrl.navigateForward('profile');
    }).catch(err => {
      this.presentAlert(err);
    });
    
  }

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
