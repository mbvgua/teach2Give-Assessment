import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-people.component.html',
  styleUrl: './display-people.component.css'
})
export class DisplayPeopleComponent {
  // @Input() persons:{name:string, age:number}[] = [{name:'johnte',age:43}]
  @Input() persons:{name:string, age:number}[] = []
  @Output() onDelete:EventEmitter<{id:number}> = new EventEmitter()

  // get index of person you want to delete passing the index
  deletePerson(i:number){
    this.onDelete.emit({id:i})
  }

}
