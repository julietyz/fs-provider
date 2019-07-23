import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ListingImgMapService } from '../services/listing-img-map.service';





@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.page.html',
  styleUrls: ['./edit-rental.page.scss'],
})
export class EditRentalPage implements OnInit {

  name: string;
  location: string;
  price: string;
  description: string;
  img: string;


  public providerId: string;
  public listingId: string;
  public listings: any;


  constructor(
    private listingService: ListingService,
    private alertctl: AlertController,
    private navCtrl: NavController,
    private listingImgMapService: ListingImgMapService,



  ) { 

    this.listingId = window.localStorage.getItem("listingid");
    this.providerId = window.localStorage.getItem("providerid");


  }

  ngOnInit() {
    this.listingService.getById(this.listingId).then(res=>{
      this.listings = res;
      console.log(res);
    }).catch(err => {console.log(err)})
  }

  edit(){
    console.log("edit");

    let newName = this.listings[0].name
    let newPrice = this.listings[0].price
    let newLocation = this.listings[0].location
    let newDescription = this.listings[0].description
    
    if(this.name != newName && this.name != undefined)
    {
      newName = this.name;
    }
    if(this.price != newPrice && this.price != undefined)
    {
      newPrice = this.price;
    }
    if(this.location != newLocation && this.location != undefined)
    {
      newLocation = this.location;
    }
    if(this.description != newDescription && this.description != undefined)
    {
      newDescription = this.description;
    }
    if(this.img != undefined)
    {
      this.addImageMap(this.listingId, this.img);
    }

    const updatedListing = {
      id: this.listingId,
      providerID: this.providerId,
      name: newName,
      price: newPrice,
      location: newLocation,
      description: newDescription
    };

    console.log(updatedListing);

    this.listingService.edit(updatedListing).then(res=>{
      this.navCtrl.navigateForward("prop-deets");
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

  addImageMap(listingId, imgURL){

    console.log(listingId, imgURL); 

    const newUrl = {
      listingID: listingId,
      imageURL: imgURL
    }

    this.listingImgMapService.create(newUrl).then(res=>{
      console.log(res);
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  deleteImage(img){
    console.log(img);
    console.log("delete");

    this.listingImgMapService.deleteByImageURL(img).then(res=>{
    }).catch(err => {console.log(err)})

    
  }

}
