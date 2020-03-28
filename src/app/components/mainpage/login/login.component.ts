import { Component, OnInit } from '@angular/core';
import {  HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    // animation triggers go here
    // trigger name goes in the div
    trigger('slideInOut', [
      state('false', style({
        opacity: '0'
      })),
      state('true', style({ opacity: '1' })),
      transition('false => true', animate('3s')),
      transition(':enter', [
        style({
          transform: 'translateY(-100%)'}),
        animate('900ms ease-in', style({transform: 'translateY(0%)'})),
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {

  loading = false;
  errorMessage: string;

  constructor(private authenticationService :AuthenticationService, private router : Router ) { }

  ngOnInit(): void {
  }

  onSigIn(form: NgForm) {
    this.loading = true;
    const userId = form.value.userID;
    const password = form.value.password;

    this.authenticationService.signIn(userId, password).subscribe(
      (data) => {
        this.loading = false;

      },
      (error) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      });
  }

}
