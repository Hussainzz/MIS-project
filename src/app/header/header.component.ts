import { Component, OnInit } from '@angular/core';

import { User } from '../Models/index';
import { UserService } from '../Services/user.service';
import { AuthenticationService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: User;
  users: User[] = [];
  valid:boolean;
  constructor(private userService: UserService, private authenticationService:AuthenticationService) {
      this.username = JSON.parse(localStorage.getItem('username'));
      this.valid=true;
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.username = null;
  }

}
