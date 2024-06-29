import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tours/tour.service';
import { Tours } from '../models/tours';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit{

  constructor( private ts:TourService){}

  tours: Array<Tours> = []

  ngOnInit(): void {
    // get all tours
    this.ts.getTours().subscribe( response=>{
      this.tours = response
      console.log(response)
    })

    // ADMIN ROLES
    // getHotel(id)
    // updateHotel(id)
    // deleteHotel(id)

  }

}
