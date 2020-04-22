import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, RouterLinkActive} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {AuthenticationService} from '../../services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {EditUserDialogComponent} from '../edit-user-dialog/edit-user-dialog.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit, OnDestroy {

   users: User[];
  private subscription: Subscription;

  constructor(private usersService: UserService,
              private authenticationService: AuthenticationService, private router: Router, private route : ActivatedRoute, private dialog: MatDialog) {
    this.subscription = this.usersService.getUsers().subscribe(data => {
      this.users  = data;
    });
  }

  addUser(){
    this.router.navigate(['add-user'], {relativeTo:this.route})
  }
  ngOnInit() {



  }

  ngOnDestroy(){
    this.subscription.unsubscribe()

  }

  onViewUser(selectedUser: User) {
    // const dialogConfig = new MatDialogConfig();
    //
    // dialogConfig.data = selectedUser;
    // dialogConfig.disableClose = true;
    // dialogConfig.hasBackdrop = true;
    // dialogConfig.width = '60%';

    this.dialog.open(EditUserDialogComponent);
  }

  onDelete(userId: String){
    this.usersService.deleteUser(userId);
    this.ngOnInit();

    this.subscription = this.usersService.getUsers().subscribe(data => {
      this.users  = data;
    });
  }



}
