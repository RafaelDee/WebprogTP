import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { CookieService } from 'ngx-cookie';
import { Observable, find, firstValueFrom } from 'rxjs';
import { AuthService as Au0 } from '@auth0/auth0-angular';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  defaultProfile: User = {
    loginProvider: LoginProvider.self,
    uid: 'a093d51c-1b22-48d3-8f50-bb061d188429',
    username: 'mdo',
    about: faker.person.bio(),
    photoURL:
      'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/774171/9bf2375b6f7db6c0275fc9d6e4ed85cbe51bf9ab.gif',
    email: 'mdo@gmail.com',
    password: 'mdo1233412mdo',
  };

  public currentUser: User;
  users: User[] = [
    {
      ...this.defaultProfile,
      uid: 'a093d51c-1b22-48d3-8f50-bb061d188429',
      email: 'mdo@gmail.com',
      password: 'mdo1233412mdo',
      username: 'mdo',
    },
  ];
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private auth0: Au0
  ) {

    this.users = this.cookieService.get('users')
      ? (JSON.parse(this.cookieService.get('users')) as User[])
      : this.users;
    let cuid = this.cookieService.get('currUsr');
    if (cuid == null || cuid == undefined) return;
    firstValueFrom(auth0.user$).then(user=>{
      if(user != null){
        this.loginAuth0(user.email,user.name);
        return;
      }
      this.currentUser = this.users?.find(
        (user) => user.uid == this.cookieService.get('currUsr')
      );
    }).catch(asd=>{
      this.currentUser = this.users?.find(
        (user) => user.uid == this.cookieService.get('currUsr')
      );
    })

  }
  ngOnInit() {}
  addToWishlist(id: string, add: boolean) {
    if (this.currentUser == null) {
      this.router.navigate(['./auth/login'], {
        queryParams: { loginRequired: true },
      });
      return;
    }
    let index = this.users.findIndex(
      (user) => user.uid == this.currentUser.uid
    );
    if (!add) {
      this.users[index].wishlist?.delete(id);
      this.currentUser = this.users[index];
      return;
    }

    if (this.users[index].wishlist == null)
      this.users[index].wishlist = new Map<string, boolean>();
    this.users[index].wishlist.set(id, true);
    this.currentUser = this.users[index];
  }
  login(email: string, password: string) {
    let user = [...this.users.values()].find((user) => user.email == email);
    if (user == null) {
      throw Error('Account does not exist');
    }
    if (user.password != password) {
      throw Error('Passwords do not Match');
    }
    this.currentUser = user;
    this.cookieService.put('currUsr', user.uid);
    this.router.navigate(['./']);
  }
  loginAuth0(email: string, username: string) {
    let user = [...this.users.values()].find((user) => user.email == email);

    if (user != null && user[1].loginProvider != LoginProvider.Auth0)
      throw Error('Please Login with Auth0');
    if (user == null) {
      let uid = uuidv4();
      this.users.push(uid, {
        loginProvider: LoginProvider.Auth0,
        about: faker.person.bio(),
        email: email,
        username: username,
        uid: uid,
        photoURL: faker.image.avatar(),
      });
    }
    this.currentUser = user;
    return;
  }
  signup(username: string, email: string, password: string, Cpassword: string) {
    let acc = [...this.users.entries()].find((asd) => {
      asd[1].email == email;
    });

    if (acc) {
      throw Error('Account already exist');
    }
    if (password != Cpassword) {
      throw Error('Passwords do not Match');
    }
    let uid = uuidv4();
    this.users.push(uid, {
      loginProvider: LoginProvider.self,
      about: faker.person.bio(),
      email: email,
      password: password,
      username: username,
      uid: uid,
      photoURL: faker.image.avatar(),
    });
    this.router.navigate(['./auth/login']);
    this.cookieService.put('users', JSON.stringify(this.users));
  }
  logout() {
    if(this.currentUser.loginProvider == LoginProvider.Auth0){
      this.auth0.logout();
    }
    this.cookieService.remove('currUsr');
    this.currentUser = null;
    this.router.navigate(['./']);
  }
}
export enum LoginProvider {
  self,
  Auth0,
}
export interface User {
  loginProvider: LoginProvider;
  uid: string;
  username: string;
  photoURL?: string;
  about: string;
  password?: string;
  email: string;
  wishlist?: Map<string, boolean>;
}
