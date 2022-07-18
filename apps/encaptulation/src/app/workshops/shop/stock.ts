import { Printer } from '../printer/printer.interface';
import { Product } from '../product/product';

export class Stock {
  constructor(private product: Product, public count: number,public borrow:number) {}

  getNameOfProduct(): string {
    return this.product.name;
  }


  listOfProduct(printer: Printer): void {
    this.product.printData(printer);
  }
}
