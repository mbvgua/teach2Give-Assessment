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


  
  // SYNCHRONOUS
  unallowedNamesValidator(control:FormControl):{[x:string]:boolean}|null{
    if(this.unallowedNames.includes(control.value)){
      return {unallowedName:true}
    }
    return null
  }
  
  // observables
  obs = new Observable<number>((observer)=>{
    let count:number = 0
    setInterval(()=>{
      observer.next(count)
      count++

      // if(count === 10){
      //   observer.complete()
      // } else if (count === 5){
      //   observer.error({message:"error occured"})
      // }

    }, 1000)
  })
  
  
  // prefilling data
  ngOnInit(): void {
    this.form = new FormGroup({
      predefinedData : new FormGroup({
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
      })
    })

    // subscribe to the three callbacks
    this.sub = this.obs.pipe(
      map(x => x*20),
      filter(x => x<100)
    ).subscribe({
      next: (value) => console.log(value),// takes in values arguments
      error: (error) => console.log(error),// has error argument
      complete: () => console.log('This is complete!') // no arguments
  })
  }

  ngOnDestroy(): void {
    console.log('Login component destroyed')
    this.sub.unsubscribe()  //prevent data leaks on component swicthing
  }

}
