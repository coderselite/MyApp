
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[]

  constructor(public navCtrl: NavController, private githubusers: GithubUsers) {
    githubusers.load().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

  ionViewDidLoad() {
    console.log('hello users page');
  }

}
