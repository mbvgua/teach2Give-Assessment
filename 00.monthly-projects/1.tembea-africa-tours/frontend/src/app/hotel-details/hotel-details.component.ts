import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { HotelService } from '../services/hotels/hotel.service';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent implements OnInit{

  constructor( 
    private route:ActivatedRoute,
    private hs:HotelService
  ){}

  // declare the properties
  id!: string
  hotel!:any  //CHANGE THIS LATERR!!!

  ngOnInit(): void {
    // listen to changes reactively
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.hotel = this.hs.hotels.find(x => x.id===+this.id)
    })
  }

}
