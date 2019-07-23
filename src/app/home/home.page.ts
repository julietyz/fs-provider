import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Provider } from '../models/provider';
import { AlertController } from '@ionic/angular';
import { ProviderAuthService } from '../services/provider-auth.service';



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
  password: string;

  provider: any;

  constructor(
    private navCtrl: NavController,
    private alertctl: AlertController,
    private providerAuthService: ProviderAuthService


  ) {
  }

  navToLogin() {
    this.navCtrl.navigateForward("login");
  }

/*   createProvider() {

    var newProvider = new Provider(this.firstName, this.lastName, this.email, this.phone);
    this.providers.push(newProvider); 
    this.navToLogin();

  } */

  createProviderBackend() {

    const newProvider = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      dateCreated: "",
    }

    this.providerAuthService.register(newProvider).then(res=>{
      this.provider = res;
      this.navCtrl.navigateForward('profile', {
        queryParams: {
          user: res
        }
      });
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
