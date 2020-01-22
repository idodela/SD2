import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from "util";

@Component({
  selector: 'app-upload-artwork',
  templateUrl: './upload-artwork.component.html',
  styleUrls: ['./upload-artwork.component.css']
})
export class UploadArtworkComponent implements OnInit {
  selectedFile : File = null;

  dvms: String;
  constructor(private http: HttpClient ) { }


  ngOnInit() {
  }
  onFileSelected(event) {
    this.selectedFile =<File> event.target.files[0];
  }
  onUpload() {
    const fd= new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    this.http.post('https://sd2-praktijk.firebaseio.com/data.json', fd).subscribe(res =>{
      console.log(res);
    } , error1 => {
      console.log(error1)
    });

  }

}
