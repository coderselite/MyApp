import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class GithubUsers {

  githubApiUrl = 'http://localhost:8080/WashupApp';

  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

  load():Observable<User[]>{
    return this.http.get(`${this.githubApiUrl}/getAllUsers`)
    .map(res => <User[]>res.json());
  }

}
