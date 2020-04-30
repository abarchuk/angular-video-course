import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean {
      return this.isAuthenticated();
  }

  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
