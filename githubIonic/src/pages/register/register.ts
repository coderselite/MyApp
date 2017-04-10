import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  register = {firstName:'', lastName:'', mobile:'', otp:''};

  constructor(public nav: NavController, public navParams: NavParams, public http:Http) {   }

  postRequest(){
    var headers = new Headers();
    headers.append("Accept",'application/json');
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers:headers});
    let postParams = {
      firstName:this.register.firstName,
      lastName:this.register.lastName,
      mobile:this.register.mobile,
      otp:this.register.otp
    }
    this.http.post("http://localhost:8080/WashupApp/addUser",postParams,headers)
    .subscribe(data =>{
      console.log(data['_body']);
    },error =>{
      console.log(error);
    });

    this.nav.setRoot(UsersPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
