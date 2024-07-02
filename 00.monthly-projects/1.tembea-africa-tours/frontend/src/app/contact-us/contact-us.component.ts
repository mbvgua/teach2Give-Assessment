import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private store:Store<any>){
    this.store.subscribe(state =>{
      console.log(state)
    })
  }


  showParagraph$ = this.store.select(
    state => state.trial.showParagraph
  )
  onChange(){
    // this.showParagraph = !this.showParagraph
    this.store.dispatch({type:'Checked'})

  }

}
