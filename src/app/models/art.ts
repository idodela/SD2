export class Art{

  private id: number;
  private name: string;
  private description: string;
  private price: number;
private img:string;


  constructor(id:number, name: string, description:string, price:number, img:string){
    this.id = id;
    this.name = name;
    this.description= description;
    this.price = price
    this.img = img

  }
}
