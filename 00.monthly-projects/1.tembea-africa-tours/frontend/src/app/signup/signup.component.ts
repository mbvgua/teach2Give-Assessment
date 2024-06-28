import { Component, inject, OnInit } from '@angular/core';
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
export class SignupComponent implements OnInit{
  
  constructor(private auth:AuthService){}

  form!: FormGroup
  // custom validators
  unallowedNames = ['.','*','?','!']  //use regex
  router = inject(Router)   // create the router property to allow navigation to login page

  // signup(){
  //   if(this.form.valid){
  //     // instead navigate to login
  //     // this.router.navigate(['/login'])
  //     console.log(this.form.value.predefinedData)      
  //   } else {
  //     return (console.log('form not valid'))
  //   }
  
  // }
  
  onSubmit(){
    // console.log(this.form)
    console.log(this.form.value.predefinedData)  //remove nesting
    this.auth.registerUser(this.form.value.predefinedData).subscribe((response)=>{
      console.log(response.message)
    })
    this.form.reset()
  }


  // prefilling data
  ngOnInit(): void {
    this.form = new FormGroup({
      predefinedData : new FormGroup({
        // pass values matching those in backend
        u_name: new FormControl(null,[Validators.required, this.unallowedNamesValidator.bind(this)]),
        u_email: new FormControl(null,[Validators.required, Validators.email]),
        u_password: new FormControl(null, Validators.required)
      })
    })

    // observables syntax
  }

  // SYNCHRONOUS
  unallowedNamesValidator(control:FormControl):{[x:string]:boolean}|null{
    if(this.unallowedNames.includes(control.value)){
      return {unallowedName:true}
    }
    return null
  }

}
