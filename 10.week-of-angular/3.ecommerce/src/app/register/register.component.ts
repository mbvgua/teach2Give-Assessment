import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    console.log(this.form.value)
    this.form.reset()
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirm_password: new FormControl(null, Validators.required)
    })
  }

}
