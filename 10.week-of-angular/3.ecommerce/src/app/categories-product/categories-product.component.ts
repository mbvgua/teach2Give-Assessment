import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

  // display the entire html page
  // onSubmit(form:HTMLFormElement){
  //   console.log(form)
  // }

  // get key:value properties
  // onSubmit(form:NgForm){
  //   console.log(form)
  // }

  // use the viewchild decorator -> no need to pass anyhting on onSubmit()
  @ViewChild('form') form!:NgForm
  onSubmit(){
    console.log(this.form)
  }

}
