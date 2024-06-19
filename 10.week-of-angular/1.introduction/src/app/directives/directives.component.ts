import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  persons:{name:string, age:number}[] = []
  personName:string = ''
  personAge:string = ''

  // create the methos to add to the persons list
  addPerson(){
    this.persons.push({name:this.personName, age:+this.personAge})
    console.log(this.persons)
  }

  // get index of person you want to delete passing the index
  deletePerson(i:number){
    // console.log(i)
    // remove element from array
    // this.persons.splice(i) -> would remove all folowing indeex 
    this.persons.splice(i,1) 
  }

  // switch case
  day = 'Monday'
}
