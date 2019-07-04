import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  providers: Array<Provider> = [];
  firstName: string;
  lastName: string;
  email: string;
  phone: number;

  constructor(
    private navCtrl: NavController,
  ) {
  }

  navToLogin() {
    this.navCtrl.navigateForward("login");
  }

  createProvider() {

    var newProvider = new Provider(this.firstName, this.lastName, this.email, this.phone);
    this.providers.push(newProvider); 
    this.navToLogin();

  }

}
