import { Injectable } from '@angular/core';
import { Tours } from '../../models/tours';
import { HttpClient } from '@angular/common/http';
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
  // updateHotel(id)
  // deleteHotel(id)
}
