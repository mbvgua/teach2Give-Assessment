import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  private isLoggedIn = false

  
  // create logged out method
  logout(){
    /*MAJOR PROBLEM WITH THIS. TO LOGIN YOU ARE FETCGIN FROM TH ELOCAL STORAGE,
     BUT IF YOU DELETE IT HERE HOW WILL YOU GET THE TOKEN FRO LOCAL STORAGE*/
    localStorage.clear()
    this.isLoggedIn = false
  }

  // create the logged in method
  login(){
    this.isLoggedIn = true
  }

  // show if logged in or not
  showStatus(){
    const token = localStorage.getItem('token') as string

    if(token){
      this.isLoggedIn = true
      return true
    } 
    
    this.isLoggedIn = false
    return this.isLoggedIn
  }

  // get the user roles
  getRole(){
    // return roles based on tokens
  }
}
