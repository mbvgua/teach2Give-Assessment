import { Injectable } from '@angular/core';
import { Hotels, hotelsResponse } from '../../models/hotels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor( private http:HttpClient) { }

  private readonly baseUrl:string = 'http://localhost:4000/hotels/' 

  // get all the hotels
  getHotels():Observable<Array<Hotels>>{
    return this.http.get<Array<Hotels>>(this.baseUrl + '') 
  }

  // ADMIN ROLES
  // getHotel(id)
  getHotel(id:string):Observable<Array<Hotels>>{
    return this.http.get<Array<Hotels>>(this.baseUrl + `${id}`) 
  }
  // updateHotel(id)
  // deleteHotel(id)

  // addhotel
  addHotel(newHotel:Hotels):Observable<hotelsResponse>{
    const token = localStorage.getItem('token') as string
    return this.http.post<hotelsResponse>(this.baseUrl+ '',newHotel)
  }

}
