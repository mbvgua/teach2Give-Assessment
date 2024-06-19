import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //string interpolation
  greetings:String = 'Niaje Morio!'
  isLying = true
  people = [1,'Basmati','Rice','Nuclear',['innner','nesting',['continues']]]

  sayHello():string{  //string interpolated as it returns a string
    return 'Hello there You!'
  }

  // property binding
  disable=true
  // experimental

  constructor(){
    setTimeout(()=>{
      this.disable = false
      // this.experimental.style.color = 'red'
    },3000)
  }

  // event binding
  AddThem(){
    console.log('you have clicked the button')
  }

  takeInput(event:Event){
    console.log(event.target)
  }

  // 2 way data binding
  workWithThis="palceholder text"
}
