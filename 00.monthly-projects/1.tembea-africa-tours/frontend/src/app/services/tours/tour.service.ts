import { Injectable } from '@angular/core';
import { Tour } from '../../models/tours';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  // hardcode the tours
  tours:Array<Tour> = [
    {
      id: 1,
      name:'Altair',
      destination:'Kwa mathe',
      imageUrl:'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 2,
      name:'Intercontinental Hotel',
      destination:'Kule Ndakas',
      imageUrl:'https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 3,
      name:'World Boss Hotel',
      destination:'kwangu',
      imageUrl:'https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_960_720.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 4,
      name:'Hii Nayo haijulikani',
      destination:'Tebu guess',
      imageUrl:'https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    }
  ]

  // define all the neccessary methods
  getTours(){
    return this.tours
  }
}
