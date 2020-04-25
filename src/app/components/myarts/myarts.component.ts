import { Component, OnInit } from '@angular/core';
import {Art} from '../../models/art';
import {DomSanitizer} from '@angular/platform-browser';
import {ArtsService} from '../../services/arts.service';

@Component({
  selector: 'app-myarts',
  templateUrl: './myarts.component.html',
  styleUrls: ['./myarts.component.css']
})
export class MyartsComponent implements OnInit {

  myArts: Art[]= [];

  constructor( private artsService : ArtsService , private _sanitizer: DomSanitizer) {
    this.artsService.getUserArts().subscribe((data:Art[])=>{
      this.myArts = data;
      console.log(this.myArts);
      this.myArts.forEach(art => {
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


  public getSantizeUrl(url : string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

}
