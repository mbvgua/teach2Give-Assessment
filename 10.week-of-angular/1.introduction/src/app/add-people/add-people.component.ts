import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-people',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-people.component.html',
  styleUrl: './add-people.component.css'
})
export class AddPeopleComponent {
  personName:string = ''
  personAge:string = ''

  @Output() onAddPerson:EventEmitter<{name:string, age:number}> = new EventEmitter()
   

  // create the methods to add to the persons list
  addPerson(){
    this.onAddPerson.emit({name:this.personName, age:+this.personAge})
  }


}
