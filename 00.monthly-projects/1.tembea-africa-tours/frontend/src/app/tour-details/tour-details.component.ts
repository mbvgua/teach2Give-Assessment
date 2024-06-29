import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Tours } from '../models/tours';
import { TourService } from '../services/tours/tour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.css'
})
export class TourDetailsComponent implements OnInit{

  constructor( 
    private route:ActivatedRoute,
    private ts:TourService
  ){}

  // declare the properties
  id!: string
  tour!:any

  ngOnInit(): void {
    // listen to changes reactively
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.tour.push(this.ts.getTour(this.id)) 
      // .find(x => x.id===+this.id)
    })
  }
}
