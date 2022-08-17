import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    !this.errorUsername &&
      !this.errorPassword &&
      this.userService.signUp(this.username, this.password);
  }
}
