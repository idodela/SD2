import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

   invalid = false;
  roles: UserRoles[] = [
    new UserRoles('Runner', 'RUN'),
    new UserRoles('Ground Engineer', 'GE'),
    new UserRoles('Administrator', 'ADM')
  ];
   editable = false;

   userForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    validatePassword: new FormControl(),
    role: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) private user: User, private dialogRef: MatDialogRef<EditUserDialogComponent>,
              private usersService: UserService) {
  }

  ngOnInit() {
    this.populateForm();
  }

  populateForm() {
    // this.userForm.setValue({
    //   name: this.user.name,
    //   password: this.user.password,
    //   validatePassword: '',
    //   role: this.getRole(this.user.userType)
    // });
  }

  getRole(abbreviation: string): string {
    let getRole = '';

    this.roles.forEach(role => {
      if (role.abbreviation === abbreviation) {
        getRole = role.role;
      }
    });

    return getRole;
  }

  passwordIsDirty(): boolean {
    return this.userForm.value.password !== this.user.password;
  }

  onExit() {
    this.dialogRef.close();
  }

  onEdit() {
    this.editable = true;
  }

  onSave() {
    this.invalid = false;

    if (this.userForm.valid) {
      const editedUser = this.userForm.value;
      if (this.passwordIsDirty() && editedUser.password !== editedUser.validatePassword) {
        this.invalid = true;
      } else {
        this.user.name = editedUser.name;
        this.user.password = editedUser.password;
        this.roles.forEach(role => {
          if (role.role === editedUser.role) {
            this.user.userType = role.abbreviation;
          }
        });

        this.usersService.saveUser(this.user);
        this.onExit();
      }
    } else {
      this.invalid = true;
    }
  }

  onCancel() {
    this.populateForm();
    this.editable = false;
    this.invalid = false;
  }

  onDelete() {
    //   const confirmation = confirm('Are you sure? The user will be gone forever!');
    //
    //   if (confirmation) {
    //     this.usersService.deleteUser(this.user.id);
    //     this.dialogRef.close();
    //   }
    // }
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
