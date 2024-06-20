import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from "./directives/directives.component";
import { AddPeopleComponent } from "./add-people/add-people.component";
import { DisplayPeopleComponent } from "./display-people/display-people.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, DirectivesComponent, AddPeopleComponent, DisplayPeopleComponent]
})
export class AppComponent {
  title = '1.introduction';
  // peopleList:{name:string, age:number}[] = [{name:'johnte',age:43}]
  peopleList:{name:string, age:number}[] = []

  addNewPerson(eventData:{name:string, age:number}){
    this.peopleList.push(eventData)
    console.log(this.peopleList)
  }

  deletePerson(eventData:{id:number}){
    this.peopleList.splice(eventData.id,1)
  }
}
