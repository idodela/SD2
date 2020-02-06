import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Art} from '../../models/art';
import {ArtsService} from '../../services/arts.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent implements OnInit {

  artList: Art[]=[];




  constructor(private artService: ArtsService) {
    this.artList= this.artService.artsList
  }

  ngOnInit() {
  }

}
