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

  emptyUsername() {
    this.errorUsername = this.username === '' ? true : false;
  }

  emptyPassword() {
    this.errorPassword = this.password === '' ? true : false;
  }

  authenticate() {
    this.emptyUsername();
    this.emptyPassword();
    const isAuthorized = this.userService.signIn(this.username, this.password);
    this.errorUser =
      !this.errorUsername && !this.errorPassword && !isAuthorized;
    isAuthorized &&
      sessionStorage.setItem('user', JSON.stringify(isAuthorized));
  }
}
