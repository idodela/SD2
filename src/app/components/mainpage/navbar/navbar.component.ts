import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  onLogOut() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  isAD() {
    if (this.authenticationService.currentUser.role === 'AD') {
      return true;
    }
  }

  isST() {
    if (this.authenticationService.currentUser.role === 'ST') {
      return true;
    }
  }

  isEM() {
    if (this.authenticationService.currentUser.role === 'EM') {
      return true;
    }
  }

}
