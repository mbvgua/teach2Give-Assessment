import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent implements OnInit {

  products!:Product[]
  constructor(private ps:ProductService){}

  ngOnInit(): void {
    this.products = this.ps.getProducts()
  }

  deleteProduct(id:number){
    this.ps.deleteProduct(id)
  }
}
