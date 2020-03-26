import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'SD2';
  RentArt : any[] ;
  constructor(db: AngularFireDatabase) {
    db.list('/RentArt').valueChanges()
      .subscribe(RentArt => {this.RentArt = RentArt;
      console.log(this.RentArt)
      })



  }
}
