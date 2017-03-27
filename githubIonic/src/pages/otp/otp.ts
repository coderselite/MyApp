import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, App } from 'ionic-angular';
import { AuthService} from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})
export class OtpPage {
  loading : Loading;
  userOtp = { otp: ''};
  constructor(public nav: NavController, private auth: AuthService, private alertCtrl : AlertController, private loadingCtrl : LoadingController, private app: App ) {}

    public verify() {
    console.log('inside otp.ts');
    this.showLoading()
    this.auth.login(this.userOtp).subscribe(allowed =>{
      if (allowed){
        setTimeout(() =>{
          this.loading.dismiss();
          
          this.nav.setRoot(UsersPage);
        });
 }else{
        this.showError('Access denied');
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait ...'
    });
    this.loading.present();
  }

  showError(text){
    setTimeout(()=>{
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
