import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userSessionStorage = sessionStorage.getItem('user');
    if (!userSessionStorage) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
