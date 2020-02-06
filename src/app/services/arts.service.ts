import { Injectable } from '@angular/core';
import {Art} from '../models/art';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  artsList: Art[]=[];

  constructor() {
    this.addRandomArts()
  }



  addRandomArts(): Art[]{
    this.artsList.push(new Art(1, "Van Gogh", "fdwfwff", 35));
    this.artsList.push(new Art(2, "Van jem", "fdwfwff", 50));
    this.artsList.push(new Art(3, "Van blbl", "fdwfwff", 60));
    return this.artsList


  }
}


