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
  router = inject(Router)   //router property to allow navigation to login page
  unallowedNames = ['.','*','?','!']  // custom validators. Use REGEX
  message = ''

  
  onSubmit(){
    // console.log(this.form.value) ->check values
    this.auth.registerUser(this.form.value).subscribe((response)=>{
      // console.log(response.message)
      this.message = response.message

      // delay redirection, allow user to read msg
      setTimeout(()=>{
        this.router.navigate(['/login'])
      }, 1500)
    })
    this.form.reset()
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      u_name: new FormControl(null,[Validators.required, this.unallowedNamesValidator.bind(this)]),
      u_email: new FormControl(null,[Validators.required, Validators.email]),
      u_password: new FormControl(null, Validators.required)
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
