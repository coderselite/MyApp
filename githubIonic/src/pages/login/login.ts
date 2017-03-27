import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { OtpPage } from '../otp/otp';
@Component({

  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;

  registerCredentials = { mobile: ''};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  public createAccount(){
    this.nav.push(RegisterPage);
  }

  public login(){
    console.log('inside login');
    // this.showLoading()
    // if (this.registerCredentials.mobile === null){
    //   this.loading.dismiss();
    //   this.showError("Please Insert credentials");
    // } else {  
      this.nav.push( OtpPage );
    
    
  }

  
  // public login() {
  //   console.log('inside login.ts');
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed =>{
  //     if (allowed){
  //       setTimeout(() =>{
  //         this.loading.dismiss();
  //         this.nav.setRoot(HomePage)
  //       });
  //     }else{
  //       this.showError('Access denied');
  //     }
  //   },
  //   error => {
  //     this.showError(error);
  //   });
  // }

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
