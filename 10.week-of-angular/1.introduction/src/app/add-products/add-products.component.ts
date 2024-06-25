import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  constructor(private ps:ProductService){}

  productName = ''
  productDescription = ''
  productPrice = ''

  addProduct(){
    let product:Product = {
      id:this.ps.getProducts().length +1,
      name: this.productName,
      description:this.productDescription,
      price:+this.productPrice
    }

    this.ps.addProduct(product)
  }
}
