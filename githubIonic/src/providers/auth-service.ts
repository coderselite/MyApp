import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

export class User {
  name : string;
  email : string;

  constructor(name: string, email: string ){
    this.name = name;
    this.email = email;
  }
}
@Injectable()
export class AuthService {
    currentUser: User;

    // public login(credentials){
    //   if (credentials.email === null || credentials.password === null){
    //     return Observable.throw("Please insert credentials");
    //   } else {
    //     console.log('inside auth services login');
    //     return Observable.create(observer => {
    //       let access = (credentials.otp === "123456" && credentials.mobile === "9921409927");
    //       this.currentUser = new User('Vijay', 'vijayrk1122@gmail.com');
    //       observer.next(access);
    //       observer.complete();
    //     });
    //   }
    // }

    public login(credentials){
      console.log('inside auth-service');
      if( credentials.otp === null){
        return Observable.throw("Please insert credentials")
      } else {
        console.log('inside auth service login');
        return Observable.create( observer => {
          let access = (credentials.otp === "123456" );
          this.currentUser = new User('Vijay', 'vijayrk1122@gmail.com');
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
    public getUserInfo(): User {
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
