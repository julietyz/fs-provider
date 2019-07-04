import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  listings: Array<Listing>;
  listing1 = new Listing("Home in Cape Town", "Cape Town", 1500);
  listing2 = new Listing("Apartment in Camps Bay", "Camps Bay", 4000);

  name: string;
  location: string;
  price: number;

  constructor(
    private navCtrl: NavController
  ) {
    this.listings = [this.listing1, this.listing2];
  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }
  createRental() {

    var newRental = new Listing(this.name, this.location, this.price);

    this.listings.push(newRental);
  }

  ngOnInit() {
  }

}
