import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private navCtrl: NavController,
    private providerService: ProviderService,
    private alertCtrl: AlertController
  ) { }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  ngOnInit() {
  }

  login() {
    // let authUser = new User(this.eamil,this.password); -- I would do this (add user model)
    const authProvider = {
      email: this.email,
      password: this.password
    }
    this.providerService.logIn(authProvider).then(provider => {
      this.navCtrl.navigateForward('profile', provider);
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  register() {
    alert("Feature coming soon!")
    // This should navigate to the register page:
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

}
