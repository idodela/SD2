export class User{
  private id : String;
  private name: String;
  private surname : String;
  private email: String;
  private type: String;


  constructor(id: String, name: String, surname: String, email: String, type: String) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.type = type;
  }
}
