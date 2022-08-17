import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from '../../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: IUsers[] = [];

  constructor(private router: Router) {}

  signUp(userName: string, password: string) {
    const newUser = { userName, password };
    this.users.push(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser));
    this.router.navigateByUrl('/');
  }

  signIn(userName: string, password: string) {
    const isUser = this.users.find(
      (user) => user.userName === userName && user.password === password
    );
    this.router.navigateByUrl('/');
    return isUser;
  }

  signOut() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
