import {Component, OnInit} from '@angular/core';
// import {UserRoles} from '../user-details/user-details.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../../services/user.service";
import {User} from '../../models/user';
// import {UsersService} from '../../../services/users.service';
// import {User} from '../../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private invalid = false;
  private noneMatchingPasswords = false;
  private roles: UserRoles[] = [
    new UserRoles('Student', 'ST'),
    new UserRoles('Employee', 'EM'),
    new UserRoles('Administrator', 'AD')
  ];

  private userForm = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    validatePassword: new FormControl(),
    role: new FormControl()
  });

  constructor(private router: Router, private usersService: UserService) {
  }

  ngOnInit() {
  }


  onCancel() {
    let confirmation = true;
    if (this.userForm.dirty) {
      confirmation = confirm('Are you sure? All changes will be discarded if you continue!');
    }

    if (confirmation) {
        this.router.navigate(['/adminusers']);
      }
    }


  onAddUser() {
    this.invalid = false;
    this.noneMatchingPasswords = false;

    if (this.userForm.value.password !== this.userForm.value.validatePassword) {
      this.noneMatchingPasswords = true;
    }

    if (!this.userForm.invalid && this.userForm.value.role !== null && !this.noneMatchingPasswords) {
      const userValue = this.userForm.value;
      let roleAbbr = '';
      this.roles.forEach(role => {
        if (role.role === userValue.role) {
          roleAbbr = role.abbreviation;
        }
      });
      const user = new User(userValue.username, userValue.name, roleAbbr, userValue.surname,userValue.email, userValue.password );

      console.log(user);
      this.usersService.saveUser(user);
      this.router.navigate(['/adminusers']);
    } else {
      if (!this.noneMatchingPasswords) {
        this.invalid = true;
      }
    }
  }
}
export class UserRoles {
  role: string;
  abbreviation: string;

  constructor(role: string, abbreviation: string) {
    this.role = role;
    this.abbreviation = abbreviation;
  }
}
