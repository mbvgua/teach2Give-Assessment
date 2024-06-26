import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotels/hotel.service';
import { TourService } from '../services/tours/tour.service';
import { CommonModule } from '@angular/common';
import { Hotel } from '../models/hotels';
import { Tour } from '../models/tours';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

    // ensure the constructors run when component is displayed
    constructor( 
      private hs:HotelService,
      private ts:TourService 
    ){}

    // declare the properties
    hotels!:Array<Hotel>
    tours!:Array<Tour>

    ngOnInit(): void {
      this.hotels = this.hs.getHotels()
      this.tours = this.ts.getTours()
    }
}
