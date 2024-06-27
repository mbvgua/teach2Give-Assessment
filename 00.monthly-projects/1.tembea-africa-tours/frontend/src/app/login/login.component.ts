import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( private auth:AuthService){}

  login(){
    // change current property to true
    this.auth.login()
  }

}
