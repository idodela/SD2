import { Component, OnInit } from '@angular/core';
import {Art} from "../../models/art";
import {Router} from "@angular/router";
import {ArtsService} from "../../services/arts.service";

@Component({
  selector: 'app-loaned-arts',
  templateUrl: './loaned-arts.component.html',
  styleUrls: ['./loaned-arts.component.css']
})
export class LoanedArtsComponent implements OnInit {

  artsList:Art[];
  constructor(private router: Router, private artService: ArtsService) {

    this.artsList = this.artService.artsList;

  }

  ngOnInit() {
  }



  //This method opens a matDialog modal with the details of the Art
  onViewArt(selectedArt: Art){
    console.log(selectedArt)
  }
}
