import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from './models/user';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const user = JSON.parse(localStorage.getItem('auth') || 'null');
  if (user && user.id && user.id > 0) {
    return true;
  }
  router.navigate(['/']);
  return false;
};

