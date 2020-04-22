import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {error} from "util";
import {FormControl, FormGroup} from '@angular/forms';
import {ArtsService} from '../../services/arts.service';
import {Art} from '../../models/art';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-upload-artwork',
  templateUrl: './upload-artwork.component.html',
  styleUrls: ['./upload-artwork.component.css']
})
export class UploadArtworkComponent implements OnInit {
  fileData : File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  artForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private http: HttpClient , private artService: ArtsService) { }


  ngOnInit() {
  }

  // fill the file variable with the image that is chosen
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();

    console.log(this.uploadedFilePath)
  }

  // method to preview the image in a div
  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      console.log(this.previewUrl)
    }
  }

  saveArt(data){
    console.log(data);
    this.artForm.reset();
    const uploadImageData = new FormData();
    uploadImageData.append('img', this.fileData);
    uploadImageData.append('name', data.name);
    uploadImageData.append('available', "true");
    uploadImageData.append('description', data.description);
    uploadImageData.append('price', data.price);


     uploadImageData.forEach(key=> console.log(key));

    this.artService.addArt(uploadImageData).subscribe(res => {
      console.log(res);
    });
  }




}
