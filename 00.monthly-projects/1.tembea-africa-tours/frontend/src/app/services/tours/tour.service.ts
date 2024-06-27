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
      imageUrl:'https://cdn.pixabay.com/photo/2022/11/21/21/41/mountains-7608306_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 2,
      name:'Nortre Dame',
      destination:'Kule Ndakas',
      imageUrl:'https://cdn.pixabay.com/photo/2021/11/22/07/37/tour-guide-6816049_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 3,
      name:'Amazon in Winter',
      destination:'kwangu',
      imageUrl:'https://cdn.pixabay.com/photo/2015/10/01/19/40/paris-967518_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 4,
      name:'Paris on Christmas',
      destination:'Tebu guess',
      imageUrl:'https://cdn.pixabay.com/photo/2019/09/05/06/42/paris-4453237_640.jpg',
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
