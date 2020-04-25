import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimage1:string="assets/employee.jpg";
  myimage2:string="assets/students.jpg";
  myimage3:string="assets/future.jpg";


  constructor() { }

  ngOnInit() {

  }

}
