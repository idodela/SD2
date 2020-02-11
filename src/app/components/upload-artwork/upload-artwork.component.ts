import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from "util";

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

  constructor(private http: HttpClient ) { }


  ngOnInit() {
  }

  // fill the file variable with the image that is chosen
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
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
    }
  }
// method to post the image to the back-end
  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.fileData);
  //   this.http.post('url/to/your/api', formData)
  //     .subscribe(res => {
  //       console.log(res);
  //       this.uploadedFilePath = res.data.filePath;
  //       alert('SUCCESS !!');
  //     })
  // }
}
