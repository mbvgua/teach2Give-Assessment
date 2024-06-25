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

  // prepolulate the form
  prepopulate(){
    // setValue - > update all the inputs
    // downside it overwrites our own existing values
    this.form.setValue({
      predefinedData : {
        username: 'John Kiriamiti',
        category: this.categories[2],
        price: this.prices[2],
        password: 'Huna Ideas!'
      }
    })

    // setValue - > update some of the inputs without updating the rest
    // this.form.form.patchValue({
    //   predefinedData : {
    //     username : 'Nicholas Cage'
    //   }
    // })
  }

}
