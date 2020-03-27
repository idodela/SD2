import { Component, OnInit } from '@angular/core';


import {  HostBinding } from '@angular/core';
import {Router} from "@angular/router";
// import {moveIn} from ''
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {Subject} from 'rxjs';
import {UserService} from "../../../services/user.service";
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



  constructor( public user: UserService) { }

  ngOnInit(): void {
  }

}
