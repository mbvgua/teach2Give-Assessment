import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models';

@Pipe({
  name: 'searchItem',
  standalone: true
})
export class SearchItemPipe implements PipeTransform {

  transform(value: Array<Product>, searchItem:string) {
    // remove trailing white spaces
    // handle empty array scenarios
    if(searchItem.trim() === '' || value.length ===0){
      return value
    }
    let filteredArray = []  //array to hold the products

    for(let product of value){
      if (product.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) || product.description.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
        filteredArray.push(product) //add it to found items array
      }
    }

    return filteredArray
    
  }

}
