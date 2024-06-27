import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor( private auth:AuthService){}

  form!: FormGroup
  router = inject(Router)

  login(){
    if (this.form.valid){
      // change current property to true
      this.auth.login()
      this.router.navigate([''])
    } else {
      return (console.log('form not valid'))
    }

  }

  // custom validators
  unallowedNames = ['.','*','?','!']  //use regex
  
  onSubmit(){
    // console.log(this.form)
    // console.log(this.form.value)  //remove nesting
    this.form.reset()
  }


  // prefilling data
  ngOnInit(): void {
    this.form = new FormGroup({
      predefinedData : new FormGroup({
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
      })
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
