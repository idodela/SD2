import { Component, OnInit } from '@angular/core';
import {Art} from "../../models/art";
import {Router} from "@angular/router";
import {ArtsService} from "../../services/arts.service";
import {LoanedArtsService} from '../../services/loaned-arts.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-loaned-arts',
  templateUrl: './loaned-arts.component.html',
  styleUrls: ['./loaned-arts.component.css']
})
export class LoanedArtsComponent implements OnInit {

  artsList:Art[];
  constructor(private router: Router, private loanService: LoanedArtsService, private _sanitizer: DomSanitizer) {

    this.loanService.getLoanedArts().subscribe((data:Art[])=>{
      this.artsList = data;
      console.log(this.artsList);
      this.artsList.forEach(art => {
        const byteCharacters = atob(art.img);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
          const byteCharacters = atob(b64Data);
          const byteArrays = [];

          for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          const blob = new Blob(byteArrays, {type: contentType});
          return blob;
        };

        const blob = b64toBlob(art.img,'image/jpeg' );
        const blobUrl = URL.createObjectURL(blob);
        art.img = blobUrl



      });

    })
  }

  ngOnInit() {
  }



  //This method opens a matDialog modal with the details of the Art
  onViewArt(selectedArt: Art){
    console.log(selectedArt)
  }

  public getSantizeUrl(url : string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
