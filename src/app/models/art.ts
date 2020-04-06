export class Art{

  private id: number;
  private name: string;
  private price: number;
  private img:string;
  private available: boolean;


  constructor(id:number, name: string, price:number, img:string, available: boolean){
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.available = available

  }
}
