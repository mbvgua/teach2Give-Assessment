import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from "./directives/directives.component";
import { AddPeopleComponent } from "./add-people/add-people.component";
import { DisplayPeopleComponent } from "./display-people/display-people.component";
import { PipesComponent } from "./pipes/pipes.component";
import { LifecycleMethodsComponent } from "./lifecycle-methods/lifecycle-methods.component";
import { Product } from './models';
import { DisplayProductsComponent } from "./display-products/display-products.component";
import { AddProductsComponent } from "./add-products/add-products.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, DirectivesComponent, AddPeopleComponent, DisplayPeopleComponent, PipesComponent, LifecycleMethodsComponent, DisplayProductsComponent, AddProductsComponent]
})
export class AppComponent {
  title = '1.introduction';
  // // peopleList:{name:string, age:number}[] = [{name:'johnte',age:43}]
  // peopleList:{name:string, age:number}[] = []

  // addNewPerson(eventData:{name:string, age:number}){
  //   this.peopleList.push(eventData)
  //   console.log(this.peopleList)
  // }

  // deletePerson(eventData:{id:number}){
  //   this.peopleList.splice(eventData.id,1)
  // }

  // // lifecycle methods
  // products:Array<Product> = [
  //   {
  //     id: 1,
  //     name: 'Mizuno Baseball Glove',
  //     description: 'take your sport to another level',
  //     price:5000
  //   },
  //   {
  //     id: 2,
  //     name: 'Grays hockey Stick',
  //     description: 'the only stick youll ever need',
  //     price:17000
  //   },
  //   {
  //     id: 3,
  //     name: 'Nike Sport Shoes',
  //     description: 'Very comfortable nike running shoes' ,
  //     price:3500
  //   }
  // ]

  // //  make changes to the products
  // addProduct(){
  //   this.products = []
  // }


  // begin on dependecy injection
  
}
