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
    this.artsList.push(new Art(1, "Van Gogh", "fdwfwff", 35, "../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(2, "Van jem", "fdwfwff", 50,"../assets/nachtwacht .jpg",false));
    this.artsList.push(new Art(3, "Van blbl", "fdwfwff", 60,"../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(4, "Van Gogh", "fdwfwff", 35,"../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(5, "Van jem", "fdwfwff", 50,"../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(6, "Van blbl", "fdwfwff", 60,"../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(7, "Van Gogh", "fdwfwff", 35,"../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(8, "Van jem", "fdwfwff", 50,"../assets/nachtwacht .jpg",true));
    this.artsList.push(new Art(9, "Van blbl", "fdwfwff", 60,"../assets/nachtwacht .jpg",true));
    return this.artsList


  }
}


