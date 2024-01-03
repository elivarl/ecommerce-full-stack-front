import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const session = inject(SessionStorageService);
  const router = inject(Router);

  if(session.getItem('token') != null){
    return true;
  }
  
  return router.createUrlTree(['/user/login']);
};
