import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'
import { OtpPage } from '../otp/otp';
import { User } from '../../models/user';
@Component({

  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;

  loginCredentials = { mobile: ''};
  user : User;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  public createAccount(){
    this.nav.push(RegisterPage);
  }

  public login(){
    // this.auth.verifyMobile(this.loginCredentials.mobile).subscribe(user => {
    //     this.user = user;
    //     if(this.user != null){
    //       this.nav.setRoot( HomePage );
    //       } else {
    //       this.nav.push( OtpPage );
    //     }
    // })  
       this.nav.push( OtpPage,{
         param1: this.loginCredentials.mobile
       } );    
  }

  public getMobile(){
    console.log(this.loginCredentials.mobile);
    return this.loginCredentials;
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
