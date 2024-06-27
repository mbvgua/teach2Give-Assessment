import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn = false

  // show if logged in or not
  showStatus(){
    return this.isLoggedIn
  }

  // cretae logged in method
  login(){
    this.isLoggedIn = true
  }

  // create logged out method
  logout(){
    this.isLoggedIn = false
  }
}
