import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {inject} from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Allow access if the user is authenticated
  } else {
    router.navigate(['/home']); // Redirect to login if not authenticated
    return false; // Prevent access to the route
  }
};
