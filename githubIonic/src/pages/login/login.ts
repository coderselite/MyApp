import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'
import { OtpPage } from '../otp/otp';
@Component({

  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginCredentials = { mobile: ''};
  loading: Loading;  

  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {  }

  public login(){  
    this.nav.push( OtpPage,{
      param1: this.loginCredentials.mobile
    } );    
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

//--------------------------------------

  
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
  //------------------------------------------------------------------------------
    //  this.auth.verifyMobile(this.loginCredentials.mobile).subscribe(user => {
    //    this.user = user;
    //    if(this.user != null){
    //      this.nav.setRoot( HomePage );
    //      } else {
    //      this.nav.push( OtpPage );
    //    }
    //  })
