import { Printer } from '../printer/printer.interface';
export class Product {
  constructor(
    public name: string,
    public costNumber: number,
    private costString: string = '$'
  ) {
    if(costNumber<0){
      throw new Error('Product cannot cost lower than 0');
    }
  }
  printData(printer: Printer) {
    printer.print(this.name + ' '+this.costNumber+this.costString);
  }
}
