import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router

  if (authService.isUserLoggedIn()) {
    // If user is authenticated, allow access to the route
    return true;
  } else {
    // If not authenticated, redirect to login page
    router.navigate(['/login']);
    //TODO: Add a message to inform the user that they need to login
    return false;
  }

};
