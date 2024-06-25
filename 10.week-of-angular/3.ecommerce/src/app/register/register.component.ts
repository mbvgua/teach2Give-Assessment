import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AsyncValidatorFn, FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form!: FormGroup
  
  onSubmit(){
    // console.log(this.form)
    console.log(this.form.value)  //remove nesting
    this.form.reset()
  }

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     username: new FormControl(null,Validators.required),
  //     email: new FormControl(null,[Validators.required, Validators.email]),
  //     password: new FormControl(null, Validators.required),
  //     confirm_password: new FormControl(null, Validators.required)
  //   })
  // }

  // prefilling data
  ngOnInit(): void {
    this.form = new FormGroup({
      predefinedData : new FormGroup({
        // synchronous
        // username: new FormControl(null,[Validators.required, this.unallowedNamesValidator.bind(this)]),
        // asynchronous
        username: new FormControl(null,[Validators.required], [<AsyncValidatorFn>this.asyncUnallowedNamesValidator.bind(this)]),
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        confirm_password: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  // add controlls into the form array
  addControll(){
    const controll = new FormControl(null, Validators.required);  //remove this semi-colon and code breaks
    (<FormArray>this.form.get('skills')).push(controll)
  }

  getControll(){
    return (<FormArray>this.form.get('skills')).controls
  }

  delete(i:number){
    (<FormArray>this.form.get('skills')).removeAt(i)
  }

  // custom validators
  unallowedNames = ['tibim','mkuu','mkurugenzi']

  // SYNCHRONOUS
  unallowedNamesValidator(control:FormControl):{[x:string]:boolean}|null{
    if(this.unallowedNames.includes(control.value)){
      return {unallowedName:true}
    }
    return null
  }

  // ASYNCHRONOUS
  asyncUnallowedNamesValidator(control:FormControl){
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(this.unallowedNames.includes(control.value)){
          resolve ({unallowedName:true})
        }

      },1500)
    })
    return promise
  }

  // prepolulate the form
  prepopulate(){
    // setValue - > update all the inputs
    // downside it overwrites our own existing values
    this.form.setValue({
      predefinedData : {
        username: 'John Kiriamiti',
        email: 'daagi210@gmail.com',
        password: 'Huna Ideas?!',
        confirm_password: 'Huna Ideas?!'
      },
      skills: []
    })

    // setValue - > update some of the inputs without updating the rest
    // this.form.patchValue({ //not nestes in reactive forms
    //   predefinedData : {
    //     username : 'Nicholas Cage'
    //   }
    // })  
  }



}
