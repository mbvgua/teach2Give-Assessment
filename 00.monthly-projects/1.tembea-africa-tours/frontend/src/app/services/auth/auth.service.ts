import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse, loginUser, registerResponse, registerUser} from '../../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }//add fetching http

  private readonly baseUrl:string = 'http://localhost:4000/auth/'


  registerUser(newUser:registerUser):Observable<registerResponse>{
    // '' should be the path in your backend not your frontend
    return this.http.post<registerResponse>(this.baseUrl+'register', newUser)
  }

  loginUser(user:loginUser):Observable<loginResponse>{
    const token = localStorage.getItem('token') as string //define token as its required
    return this.http.post <loginResponse>(this.baseUrl+'login',user,{
      headers : new HttpHeaders ({
        token : token
      })
    })
  }

}
