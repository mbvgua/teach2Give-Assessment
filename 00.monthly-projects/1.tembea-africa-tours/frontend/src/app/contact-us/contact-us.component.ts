import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Toggle } from '../state-management/actions/trial.actions';
import { AppState } from '../state-management';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent{

  constructor(private store:Store<AppState>){
    // only for confirming, use redux dev tools instead
    // this.store.subscribe(state =>{
    //   console.log(state)
    // })
  }


  showParagraph$ = this.store.select(
    state => state.trial.showParagraph
  )
  onChange(){
    // this.showParagraph = !this.showParagraph
    // this.store.dispatch({type:'Toggle'})
    this.store.dispatch(Toggle())

  }

  // logic for increment 
  count$ = this.store.select(state=>state.counter.count)

  // increments
  onIncrement(){
    this.store.dispatch({type:'Increment'})
  }

  // decrements
  onDecrement(){
    this.store.dispatch({type:'Decrement'})
  }
  // increments
  onReset(){
    this.store.dispatch({type:'Reset'})
  }


}
