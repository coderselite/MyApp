import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, LoadingController, Loading, App } from 'ionic-angular';
import { AuthService} from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})

export class OtpPage {
  userOtp = { otp: ''};
  mobile : string;
  userType : string;
  loading : Loading;
  user : User;
  flag : string;
  
  constructor(public nav: NavController, private navParams : NavParams, private auth: AuthService, private alertCtrl : AlertController, private loadingCtrl : LoadingController ) {  }

  public verify() {
    this.mobile = this.navParams.get('param1');
    this.userType = this.navParams.get('param2');
    console.log("otp userTypr = "+this.userType);
    this.showLoading();
    this.auth.authenticateUser(this.userOtp.otp, this.mobile).subscribe(flag=>{
      console.log("otp flag = "+flag);
      if(flag == "true"){
        if(this.userType == "Registered User"){
          setTimeout(()=>{
            this.loading.dismiss();
            this.nav.setRoot( HomePage );
          });
        }else{
          setTimeout(()=>{
            this.loading.dismiss();
            this.nav.setRoot( RegisterPage );
          });
        }              
      }else{
          this.showError('Access denied');
      }
    })           
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


//----------------------------------------------------

    // this.auth.login(this.userOtp).subscribe(allowed =>{
    //   if (allowed){
    //     setTimeout(() =>{
    //       this.loading.dismiss();          
    //       this.nav.setRoot(RegisterPage);
    //     });
    //   }else{
    //       this.showError('Access denied');
    //   }
    // },
    // error => {
    //   this.showError(error);
    // });


    // this.auth.verifyMobile(this.mobile).subscribe(user => {
    //     console.log("inside verify()")
    //     this.flag = user;
    //     if(this.flag == "RegisteredUser"){
    //         setTimeout(()=>{
    //           this.loading.dismiss();
    //           this.nav.setRoot( HomePage );
    //         });            
    //       } else if( this.flag == "NewUser" ){
    //        setTimeout(()=>{
    //           this.loading.dismiss();
    //           this.nav.setRoot( RegisterPage );
    //         });
    //       }
    //     }, 
    //     error =>{
    //         this.showError(error);              
    //     });