import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tours/tour.service';
import { Tours } from '../models/tours';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit{

  constructor( private ts:TourService){}

  role:string = ''
  tours: Array<Tours> = []
  tourForm!: FormGroup
  message:string = '' 


  submitTour(){
    this.ts.addTour(this.tourForm.value).subscribe(
      response => {
        this.message = response.message
        // console.log(this.tourForm.value)
        },
      error =>{
        this.message = error.error
      }
    )}

  ngOnInit(): void {
    this.role = localStorage.getItem('role') as string  //display the admin page selectively
    
    // get all tours
    this.ts.getTours().subscribe(
      response => this.tours = response
  )

    // ADMIN ROLES
    // getTour(id)
    // updateTour(id)
    // deleteTour(id)

    // handle the form
    this.tourForm = new FormGroup({
      t_name: new FormControl(null,Validators.required),
      t_location: new FormControl(null,Validators.required),
      t_image_url: new FormControl(null,Validators.required),
      t_description: new FormControl(null,Validators.required),
      t_rating: new FormControl(null,Validators.required),
      t_price: new FormControl(null, Validators.required),
    })

  }

}
