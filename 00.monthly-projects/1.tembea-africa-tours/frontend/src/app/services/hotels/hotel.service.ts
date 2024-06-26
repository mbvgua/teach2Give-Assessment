import { Injectable } from '@angular/core';
import { Hotel } from '../../models/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  // hardcode all the hotels
  private hotels:Array<Hotel> = [
    {
      id: 1,
      name:'Altair',
      location:'Kwa mathe',
      imageUrl:'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 2,
      name:'Intercontinental Hotel',
      location:'Kule Ndakas',
      imageUrl:'https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 3,
      name:'World Boss Hotel',
      location:'kwangu',
      imageUrl:'https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_960_720.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    },
    {
      id: 4,
      name:'Hii Nayo haijulikani',
      location:'Tebu guess',
      imageUrl:'https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_640.jpg',
      description:'The great',
      starRating:'The great',
      price:1738
    }
  ]

  // create all the hotels methods
  // get al the hotels
  getHotels(){
    return this.hotels
  }

}
