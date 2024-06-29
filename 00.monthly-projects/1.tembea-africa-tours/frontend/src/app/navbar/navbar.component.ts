import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotels/hotel.service';
import { TourService } from '../services/tours/tour.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

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
      private ts:TourService,
      public auth:AuthService
    ){}

    // declare the properties
    hotels!:string
    tours!:string

    ngOnInit(): void {
      // this.hotels = this.hs.getHotels()
      // this.tours = this.ts.getTours()
      this.hotels = 'build this'
      this.tours = 'later'
    }

}
