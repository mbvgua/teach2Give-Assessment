import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../models';
import { ShortenDescriptionPipe } from './shorten-description.pipe';
import { FormsModule } from '@angular/forms';
import { SearchItemPipe } from './search-item.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ShortenDescriptionPipe, FormsModule, SearchItemPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = '#Rejectfinancebill2024'
  todaysDate = new Date(2024,6,22)
  price = 1738
  percentage = 0.17
  decimals = 500

  products:Array<Product> = [
    {
      id: 1,
      name: 'Mizuno Baseball Glove',
      description: 'take your sport to another level',
      price:5000
    },
    {
      id: 2,
      name: 'Grays hockey Stick',
      description: 'the only stick youll ever need',
      price:17000
    },
    {
      id: 3,
      name: 'Nike Sport Shoes',
      description: 'Very comfortable nike running shoes' ,
      price:3500
    }
  ]

  // search bar functionality
  search = ''

  // adding the products
  addProduct(){
    this.products.push(
      {
          id: 4,
          name: 'Barbell',
          description: 'Stop being a skinny bitch!' ,
          price:3500
      }
    )
  }

  // ASYNCHRONOUS PIPE
  greetings = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Niaje Mahn!')
    },1500)
  })
}
