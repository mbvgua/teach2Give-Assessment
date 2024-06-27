import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(auth:AuthService){}

  // create the router property to allow navigation to login page
  router = inject(Router)

  signup(){
    // change current property to true
    // this.auth.login()

    // instad navigate to login
    this.router.navigate(['/login'])
  }

}
