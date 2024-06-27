import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Tour } from '../models/tours';
import { TourService } from '../services/tours/tour.service';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.css'
})
export class TourDetailsComponent implements OnInit{

  constructor( 
    private route:ActivatedRoute,
    private ts:TourService
  ){}

  // state the properties
  id!: string
  // tour!:Array<Tour>
  tour!:any   //CHANGE THIS LATER!!

  ngOnInit(): void {
    // bad approach as routes will not be reactive. Use Observables instead
    // this.id = this.route.snapshot.params['id']  //get property passed in id

    // subscribe has 3 callbacks -> success,error,complete
    // allows us to listen to changes reactively
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.tour = this.ts.tours.find(x => x.id === +this.id)
    })
  }
}
