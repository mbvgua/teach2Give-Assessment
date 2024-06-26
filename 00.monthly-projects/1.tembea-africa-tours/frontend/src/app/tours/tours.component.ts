import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tours/tour.service';
import { Tour } from '../models/tours';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit{

  constructor( private ts:TourService){}

  tours!: Array<Tour>

  ngOnInit(): void {
    this.tours = this.ts.getTours()
  }}
