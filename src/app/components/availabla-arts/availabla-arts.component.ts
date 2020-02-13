import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArtsService} from '../../services/arts.service';
import {Art} from '../../models/art';

@Component({
  selector: 'app-availabla-arts',
  templateUrl: './availabla-arts.component.html',
  styleUrls: ['./availabla-arts.component.css']
})
export class AvailablaArtsComponent implements OnInit {

  private  artsList:Art[];
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
