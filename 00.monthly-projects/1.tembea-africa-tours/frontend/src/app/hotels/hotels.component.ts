import { Component, OnInit } from '@angular/core';
import { Hotels } from '../models/hotels';
import { HotelService } from '../services/hotels/hotel.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  constructor( private hs:HotelService){}

  hotels:Array<Hotels> = []

  ngOnInit(): void {
    // get all hotels
    this.hs.getHotels().subscribe( response=>{
      this.hotels = response
      console.log(response)
    })

    // ADMIN ROLES
    // getHotel(id)
    // updateHotel(id)
    // deleteHotel(id)

  }

}
