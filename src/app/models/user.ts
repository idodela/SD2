export class User{
  id : String;
  name: String;
  surname:String;
  email: String;
  role: String;
  password: String;


  constructor(id: String, name: String, role: String, surname?: String, email?: String ,password?:String) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.password = password
  }
}
