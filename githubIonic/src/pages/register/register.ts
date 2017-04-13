import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsersPage } from '../users/users';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  statusCode: string;

  register = {firstName:'', lastName:'', mobile:'', email:'', referralCode: ''};

  constructor(public nav: NavController, public navParams: NavParams, public http:Http, private auth : AuthService) {   }

  public RegisterUser(){
    this.statusCode = this.auth.RegisterUser(this.register);
    console.log(this.statusCode);
    this.nav.setRoot(UsersPage);
  }

  // postRequest(){
  //   var headers = new Headers();
  //   headers.append("Accept",'application/json');
  //   headers.append('Content-Type','application/json');
  //   let options = new RequestOptions({headers:headers});
  //   let postParams = {
  //     firstName:this.register.firstName,
  //     lastName:this.register.lastName,
  //     mobile:this.register.mobile,
  //   }
  //   this.http.post("http://localhost:8080/WashupApp/addUser",postParams,options)
  //   .subscribe(data =>{
  //     console.log(data['_body']);
  //   },error =>{
  //     console.log(error);
  //   });

  //   this.nav.setRoot(UsersPage);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
