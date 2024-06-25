import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  // makes application available in the whole app. you can do with/without it
  providedIn: 'root'
})
export class ProductService {

  // if dependent on other services you should put them in the constructor
  constructor() { }

  private products:Array<Product> = [
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

  // adding products
  addProduct(newProduct:Product){
    this.products.push(newProduct)
  }

  // get all the products
  getProducts(){
    return this.products
  }

  // get a specific product
  getProduct(id:number){
    return this.products.find(x=> x.id===id)
  }

  // delete the products
  deleteProduct(id:number){
    let index = this.products.findIndex(x => x.id===id)
    if (index>=0){
      this.products.splice(index,1)
    } 
  }

  // update a product
  updateProduct(id:number, updatedProduct:Product){
    let index = this.products.findIndex(x => x.id===id)
    if (index>=0){
      this.products[index] = updatedProduct
    } 
  }

}
