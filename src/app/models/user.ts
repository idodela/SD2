export class User{
  id : String;
  name: String;
  surname:String;
  email: String;
  userType: String;
  password: String;


  constructor(id: String, name: String, role: String, surname?: String, email?: String ,password?:String) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.userType = role;
    this.password = password
  }
}
