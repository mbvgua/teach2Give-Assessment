import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter, map, Observable, Subscription } from 'rxjs';
import { StatusService } from '../services/auth/status.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,OnDestroy{
  constructor( private auth:AuthService, private status:StatusService){}

  form!: FormGroup
  router = inject(Router)
  sub!:Subscription   //prevent memory leak on component switching
  unallowedNames = ['.','*','?','!']  //update to regex later
  message = ''  
  role = ''
  
  onSubmit(){
    this.auth.loginUser(this.form.value).subscribe(
      (response)=>{
        this.message = response.message //message to displayed in DOM
        console.log(response)
        console.log(response.token)
        console.log(response.role)

      localStorage.setItem('token',response.token)
      localStorage.setItem('role','admin') 
      if (response.token){
        this.role = localStorage.getItem('role') as string

        if(this.role === 'admin'){
          this.router.navigate(['/admin'])
        } else {

          setTimeout(()=>{    //delayed to read message on DOM
            // this.status.login()
            this.status.showStatus()
            this.router.navigate([''])
          }, 1000)
        }
        
      }
    },
    (error)=>{
      this.message = error.message //severe nesting
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