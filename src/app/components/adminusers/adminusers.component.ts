import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router, RouterLinkActive} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthenticationServiceService} from "../../services/authentication-service.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  private users: User[];

  constructor(private usersService: UserService,
              private authenticationService: AuthenticationServiceService, private router: Router, private route : ActivatedRoute) {
  }

  addUser(){
    this.router.navigate(['add-user'], {relativeTo:this.route})
  }
  ngOnInit() {
    // this.usersService.getUsers().subscribe(users => this.users = users);
  }

  onViewUser(selectedUser: User) {
    // const dialogConfig = new MatDialogConfig();
    //
    // dialogConfig.data = selectedUser;
    // dialogConfig.disableClose = true;
    // dialogConfig.hasBackdrop = true;
    // dialogConfig.width = '60%';
    //
    // this.dialog.open(UserDetailsComponent, dialogConfig);
  }

}
