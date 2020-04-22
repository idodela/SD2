import {Component, OnInit, SecurityContext} from '@angular/core';
import {Router} from '@angular/router';
import {ArtsService} from '../../services/arts.service';
import {Art} from '../../models/art';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-availabla-arts',
  templateUrl: './availabla-arts.component.html',
  styleUrls: ['./availabla-arts.component.css']
})
export class AvailablaArtsComponent implements OnInit {

  artsList: Art[];
  retrievedImages : any =  [];
  selectedImage: any;



  constructor(private router: Router, private artService: ArtsService, private httpClient: HttpClient ,private _sanitizer: DomSanitizer) {

    this.artService.getAllArts().subscribe((data:Art[]) => {
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
    });

  }

  public getSantizeUrl(url : string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit() {

  }




}
