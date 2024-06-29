import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { StatusService } from '../services/auth/status.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
  const status = inject(StatusService)

  if(status.showStatus()){
    // if user is logged in, allow them acces
    return true
  } else {
    // else deny acces || navigate to login page
    // return false

    router.navigate(['/login'])
    return false
  }

};
