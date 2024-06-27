import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor(auth:AuthService){}

  form!: FormGroup
  // custom validators
  unallowedNames = ['.','*','?','!']  //use regex


  // create the router property to allow navigation to login page
  router = inject(Router)

  signup(){
    if(this.form.valid){
      // instead navigate to login
      this.router.navigate(['/login'])
    } else {
      return (console.log('form not valid'))
    }
  }
  
  onSubmit(){
    // console.log(this.form)
    console.log(this.form.value)  //remove nesting
    this.form.reset()
  }


  // prefilling data
  ngOnInit(): void {
    this.form = new FormGroup({
      predefinedData : new FormGroup({
        username: new FormControl(null,[Validators.required, this.unallowedNamesValidator.bind(this)]),
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
      }),
    })
  }

  // SYNCHRONOUS
  unallowedNamesValidator(control:FormControl):{[x:string]:boolean}|null{
    if(this.unallowedNames.includes(control.value)){
      return {unallowedName:true}
    }
    return null
  }


}
