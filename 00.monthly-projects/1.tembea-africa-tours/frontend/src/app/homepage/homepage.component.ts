import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  constructor(){}
  role = ''

  ngOnInit(): void {
    this.role = localStorage.getItem('role') as string  
  }

}
