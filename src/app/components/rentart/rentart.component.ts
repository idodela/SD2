import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {LoanedArtsService} from '../../services/loaned-arts.service';
import {DatePipe} from '@angular/common';

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

  currentDate = new Date();

  datGeleend: any;

  datTerug: any;


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private dialogRef: MatDialogRef<RentartComponent>,
              private loanService: LoanedArtsService, public datepipe: DatePipe
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
    console.log(numb);
    this.datGeleend = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');

    this.datTerug = this.datepipe.transform(this.currentDate.setMonth(this.currentDate.getMonth() + numb), 'yyyy-MM-dd');


    console.log(this.datGeleend);
    console.log(this.datTerug);

    const uploadImageData = new FormData();
    uploadImageData.append('artId', this.dialogData.id);
    uploadImageData.append('plaats', data.plaats);
    uploadImageData.append('adres', data.straatHuisnummer);
    uploadImageData.append('postcode', data.zipCode);
    uploadImageData.append('datGeleend', this.datGeleend);
    uploadImageData.append('datTerug', this.datTerug);

    this.loanService.loan(uploadImageData)

  }

}
