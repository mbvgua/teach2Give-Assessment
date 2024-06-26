import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotels';
import { HotelService } from '../services/hotels/hotel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  constructor( private hs:HotelService){}

  hotels!: Array<Hotel>

  ngOnInit(): void {
    this.hotels = this.hs.getHotels()
  }

}
