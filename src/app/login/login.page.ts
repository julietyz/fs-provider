import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ProviderAuthService } from '../services/provider-auth.service';


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
    private alertCtrl: AlertController,
    private providerAuthService: ProviderAuthService

  ) { }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToHome() {
    this.navCtrl.navigateForward("home");
  }
  ngOnInit() {
  }

  loginBackend(){
    const authProvider = {
      email: this.email, 
      password: this.password
    };
  
      this.providerAuthService.login(authProvider).then(res=>{
  
        const testId = localStorage.getItem("providerid");
        console.log(testId);
  
        this.navCtrl.navigateForward('profile', {
          queryParams: {
            provider: res
          }
        });
  
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
