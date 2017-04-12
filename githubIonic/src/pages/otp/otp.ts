import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, LoadingController, Loading, App } from 'ionic-angular';
import { AuthService} from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})

export class OtpPage {
  userOtp = { otp: ''};
  mobile : string;
  loading : Loading;
  user : User;
  
  constructor(public nav: NavController, private navParams : NavParams, private auth: AuthService, private alertCtrl : AlertController, private loadingCtrl : LoadingController ) {  }

  public verify() {
    this.mobile = this.navParams.get('param1');
    this.showLoading()
    if (this.auth.authenticateUser(this.mobile,this.userOtp.otp)){
      this.auth.verifyMobile(this.mobile).subscribe(user => {
        console.log("inside verify()")
        this.user = user;
        if(this.user != null){
            this.loading.dismiss();
            this.nav.setRoot( HomePage );
          } else {
            this.loading.dismiss();
            this.nav.setRoot( RegisterPage );
          }
        }
         );        
    }else{
        this.showError('Access denied');
    }     
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
