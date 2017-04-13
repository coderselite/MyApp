import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    washUpApiUrl = 'http://localhost:8080/WashupApp';
    flag: string;
    statusCode: string;

    constructor(public http: Http) {
      console.log('Hello auth-services Provider');
    }

    verifyMobile(mobileNo){
      console.log('auth-services verify mobile'+mobileNo);       
      return this.http.get(this.washUpApiUrl+"/validateUser/mobile/"+mobileNo)
      .map(res => res.text());
    }

    authenticateUser( otp, mobile ){
      console.log(otp+" "+mobile);
      var headers = new Headers();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      let options = new RequestOptions({headers:headers});
      let postParams = {
        otp:otp,
        mobile:mobile,
      }
      let data = this.http.post(this.washUpApiUrl+"/validateOtp", postParams, options)
      return data.map(res=>res.text());
    } 

    public RegisterUser(register){
      var headers = new Headers();
      headers.append("Accept",'application/json');
      headers.append('Content-Type','application/json');
      let options = new RequestOptions({headers:headers});
      let postParams = {
        firstName:register.firstName,
        lastName:register.lastName,
        mobile:register.mobile,
      }
      this.http.post("http://localhost:8080/WashupApp/addUser",postParams,options)
      .subscribe(data =>{
        this.statusCode = data.status.toString();
        console.log(data['_body']);
      },error =>{
        console.log(error);
      });
      return this.statusCode;
    }

    public logout() {
      return Observable.create(observer =>{
        observer.next(true);
        observer.complete();
      });      
    }
}



// .subscribe( data =>{
//         console.log(typeof(data.text()));
//         console.log(this.flag);
//       });
