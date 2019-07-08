import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../models/listing';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public firstName: string;

  listings: Array<Listing>;
  listing1 = new Listing("Home in Cape Town", "Cape Town", 1500, "Quaint");
  listing2 = new Listing("Apartment in Camps Bay", "Camps Bay", 4000, "Party");

  name: string;
  location: string;
  price: number;
  description: string;

  constructor(
    private navCtrl: NavController
  ) {
    this.listings = [this.listing1, this.listing2];
    this.firstName = window.localStorage.getItem('firstName');
  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }
  createRental() {

    var newRental = new Listing(this.name, this.location, this.price, this.description);

    this.listings.push(newRental);
  }

  ngOnInit() {
  }

}
