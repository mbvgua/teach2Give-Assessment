import { Component, OnInit } from '@angular/core';
import { Hotels } from '../models/hotels';
import { HotelService } from '../services/hotels/hotel.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{

  constructor( private hs:HotelService){}

  hotelForm!: FormGroup
  hotels:Array<Hotels> = []
  role:string = ''
  message:string = ''

  submitHotel(){
    console.log(this.hotelForm.value)
    this.hs.addHotel(this.hotelForm.value).subscribe(
      response=>{
        this.message = response.message
      },
      error =>{
        console.log(error.message)
        this.message = error
      }
    )}


  ngOnInit(): void {
    this.role = localStorage.getItem('role') as string  //display the admin page selectively
    
    // get all hotels
    this.hs.getHotels().subscribe(
      response => this.hotels = response
      // console.log(response)
    )

    // ADMIN ROLES
    // getHotel(id)
    // updateHotel(id)
    // deleteHotel(id)

    //handle the form
    this.hotelForm = new FormGroup({
      h_name: new FormControl(null,Validators.required),
      h_location: new FormControl(null,Validators.required),
      h_image_url: new FormControl(null,Validators.required),
      h_description: new FormControl(null,Validators.required),
      h_price: new FormControl(null,Validators.required),
      h_rating: new FormControl(null, Validators.required),
    })

  }

}
