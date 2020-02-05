import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-availabla-arts',
  templateUrl: './availabla-arts.component.html',
  styleUrls: ['./availabla-arts.component.css']
})
export class AvailablaArtsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(){
    this.router.navigate(['huurformulier']);
  }
}
