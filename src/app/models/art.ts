export class Art{

  name: string;
  price: number;
  img:string;
  available: string;
  description : string;



  constructor( name: string, price:number, img:string, available: string, description?: string){
    this.name = name;
    this.price = price;
    this.img = img;
    this.available = available;
    this.description = description;

  }
}
