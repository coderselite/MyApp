import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/user';

export class CurrentUser {
  name : string;
  email : string;

  constructor(name: string, email: string ){
    this.name = name;
    this.email = email;
  }
}
@Injectable()
export class AuthService {
    githubApiUrl = 'http://localhost:8080/WashupApp';
    currentUser: CurrentUser;  

    constructor(public http: Http) {
      console.log('Hello auth-services Provider');
    }

    verifyMobile(mobileNo):Observable<User>{
      console.log('auth-services verify mobile'+mobileNo);
      return this.http.get(this.githubApiUrl+"/getUser/mobile/"+mobileNo)
      .map(res => <User>res.json());
    }

    public login(credentials){
      console.log('inside auth-service');
      if( credentials.otp === null){
        return Observable.throw("Please insert credentials")
      } else {
        console.log('inside auth service login');
        return Observable.create( observer => {
          let access = (credentials.otp === "123456" );
          this.currentUser = new CurrentUser('Vijay', 'vijayrk1122@gmail.com');
          observer.next(access);
          observer.complete();
        });
      }
    }

    public register(credentials){
      if(credentials.mobile === null || credentials.otp === null){
        return Observable.throw('Please insert credentials');
      } else {
        return Observable.create(observer => {
          observer.next(true);
          observer.complete();
        });
      }
    }
    /**
     * name
     */
    public getUserInfo(): CurrentUser {
      return this.currentUser;  
    }

    /**
     * name
     */
    public logout() {
      return Observable.create(observer =>{
        this.currentUser = null;
        observer.next(true);
        observer.complete();
      });      
    }
}
