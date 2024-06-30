import { Injectable } from '@angular/core';
import { Tours, toursResponse } from '../../models/tours';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor( private http:HttpClient) { }
  private readonly baseUrl:string = 'http://localhost:4000/tours/'

  // get al the tours
  getTours():Observable<Array<Tours>>{
    return this.http.get<Array<Tours>>(this.baseUrl + '') 
  }

  // ADMIN ROLES
  // getHotel(id)
  getTour(id:string):Observable<Array<Tours>>{
    return this.http.get<Array<Tours>>(this.baseUrl + `${id}`) 
  }

  // addTour
  addTour(newTour:Tours):Observable<toursResponse>{
    const token = localStorage.getItem('token') as string
    return this.http.post<toursResponse>(this.baseUrl + '',newTour)
  }

  // updateHotel(id)
  // deleteHotel(id)
}
