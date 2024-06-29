import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { registerUser } from '../models/users';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  constructor ( private auth:AuthService ){}

  // the forms
  role:string = ''
  userForm!: FormGroup
  users:Array<registerUser> = []

  submitUser(){
    this.auth.registerUser(this.userForm.value).subscribe((response)=>{
      console.log(response.message)
    })
  }


  ngOnInit(): void {
    this.role = localStorage.getItem('role') as string

    // CREATE OPERATIONS

    this.auth.getUsers().subscribe( response=>{
      this.users = response
      // console.log(this.users)
    })
        
    
    // UPDATE OPERATIONS
    // DELETE OPERATIONS
    
    // booking operations
    
    // get data from the forms
    this.userForm = new FormGroup({
      u_name: new FormControl(null, Validators.required),
      u_email: new FormControl(null,[Validators.required, Validators.email]),
      u_password: new FormControl(null, Validators.required)
    })

  }

}
