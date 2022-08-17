import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorUsername: boolean = false;
  errorPassword: boolean = false;
  errorUser: boolean = false;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  disabled() {
    return this.username.length < 3 || this.password.length < 3;
  }

  validateUsername() {
    this.errorUsername = this.username.length < 3 ? true : false;
  }

  validatePassword() {
    this.errorPassword = this.password.length < 3 ? true : false;
  }

  authenticate() {
    const isAuthorized = this.userService.signIn(this.username, this.password);
    this.errorUser = !isAuthorized;
    isAuthorized &&
      sessionStorage.setItem('user', JSON.stringify(isAuthorized));
  }
}
