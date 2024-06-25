import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categories-product.component.html',
  styleUrl: './categories-product.component.css'
})
export class CategoriesProductComponent {
  categories = ['books','shoes','groceries','food','beverages','clothes']
  prices = ['0 - 500', '501 - 1000', '1001 - 2000', '2001 - 3000']
}
