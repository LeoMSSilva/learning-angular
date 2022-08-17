import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../models/users.model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  user?: IUsers;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user');
    userSessionStorage && (this.user = JSON.parse(userSessionStorage));
  }

  signOut() {
    this.usersService.signOut();
  }
}
