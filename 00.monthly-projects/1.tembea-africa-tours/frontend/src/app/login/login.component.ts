import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,OnDestroy{
  constructor( private auth:AuthService){}

  form!: FormGroup
  router = inject(Router)
  sub!:Subscription   //prevent memory leak on component switching
  unallowedNames = ['.','*','?','!']  //update to regex later
  message = ''  
  
  onSubmit(){
    this.auth.loginUser(this.form.value).subscribe((response)=>{
      // console.log(response)
      this.message = response.message
      // console.log(response.token)
      localStorage.setItem('token',response.token)

      setTimeout(()=>{    //delayed to read message on DOM
        this.auth.login()
        this.router.navigate([''])
      })
    })
    this.form.reset()
  }
  
  // SYNCHRONOUS
  unallowedNamesValidator(control:FormControl):{[x:string]:boolean}|null{
    if(this.unallowedNames.includes(control.value)){
      return {unallowedName:true}
    }
    return null
  }

  ngOnDestroy(): void {
    console.log('Login component destroyed')
  }

  // pass value to the service, then db
  ngOnInit(): void {
    this.form = new FormGroup({
      u_email: new FormControl(null,[Validators.required, Validators.email]),
      u_password: new FormControl(null, Validators.required),
    })
  }
}