import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errorUsername: boolean = false;
  errorPassword: boolean = false;
  errorUser: boolean = false;
  formRegister = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  emptyUsername() {
    this.errorUsername = this.formRegister.controls.username.errors
      ? true
      : false;
  }

  emptyPassword() {
    this.errorPassword = this.formRegister.controls.password.errors
      ? true
      : false;
  }

  authenticate() {
    this.emptyUsername();
    this.emptyPassword();
    !this.errorUsername &&
      !this.errorPassword &&
      this.formRegister.value.username &&
      this.formRegister.value.password &&
      this.userService.signUp(
        this.formRegister.value.username,
        this.formRegister.value.password
      );
  }
}
