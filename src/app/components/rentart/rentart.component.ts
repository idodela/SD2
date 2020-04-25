import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {LoanedArtsService} from '../../services/loaned-arts.service';
import {DatePipe} from '@angular/common';
import {ArtsService} from "../../services/arts.service";

@Component({
  selector: 'app-rentart',
  templateUrl: './rentart.component.html',
  styleUrls: ['./rentart.component.css']
})
export class RentartComponent implements OnInit {
  loanForm = new FormGroup({
    plaats: new FormControl(),
    straatHuisnummer: new FormControl(),
    zipcode: new FormControl(),
    duur: new FormControl()
  });

  send_date=new Date();
  datGeleend : any;

  back_date=new Date();
  datTerug : any;





  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private dialogRef: MatDialogRef<RentartComponent>,
              private loanService: LoanedArtsService, public datepipe: DatePipe, private artService : ArtsService
  ) {


  }

  ngOnInit() {
  }


  onExit() {
    this.dialogRef.close();
  }

  saveLoan(data) {
    var txt = this.loanForm.value.duur;
    var numb = txt.match(/\d/g);
    numb = numb.join("");

    var months  = parseInt(numb);
    console.log(numb);


    this.back_date.setMonth(this.back_date.getMonth()+ months);
    this.datGeleend = this.send_date.toISOString().slice(0,10);
    console.log(this.datGeleend);

    this.datTerug = this.back_date.toISOString().slice(0,10);
    console.log(this.datTerug);



    const uploadImageData = new FormData();
    uploadImageData.append('artId', this.dialogData.id);
    uploadImageData.append('plaats', data.plaats);
    uploadImageData.append('adres', data.straatHuisnummer);
    uploadImageData.append('postcode', data.zipCode);
    uploadImageData.append('datGeleend', this.datGeleend);
    uploadImageData.append('datTerug', this.datTerug);

    this.loanService.loan(uploadImageData);



    this.datGeleend =null;
    this.datTerug =null;

    this.dialogRef.close();

    this.artService.getAllArts()

  }

}
