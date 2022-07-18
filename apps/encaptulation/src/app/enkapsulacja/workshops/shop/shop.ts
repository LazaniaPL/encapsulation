import { Printer } from '../printer/printer.interface';
import { Product } from '../product/product';
import { Wholesale } from '../wholesale/wholesale';
import { Stock } from './stock';

export class Shop {
  constructor(
    private name: string,
    private bankMoney: number,
    private stocks: Stock[] = [],
    private wholesale: Wholesale
  ) {}

  //0.2% is not 0.2, but from logic i choose second param
  private static debtRatio = 1.2;

  findProductIndex(product: Product): number {
    return this.stocks.findIndex((obj) => {
      const nameInStock: string = obj.getNameOfProduct();
      return nameInStock === product.name;
    });
  }

  addProductToStock(count: number, product: Product, borrow: number = 0): void {
    const allReadyInStockIndex: number = this.findProductIndex(product);
    if (allReadyInStockIndex >= 0) {
      this.stocks[allReadyInStockIndex].count =
        this.stocks[allReadyInStockIndex].count + count;
      this.stocks[allReadyInStockIndex].borrow =
        this.stocks[allReadyInStockIndex].borrow + borrow;
    } else {
      this.stocks.push(new Stock(product, count, borrow));
    }
  }
  public allowToSellProduct(product: Product, count: number): Stock {
    const allReadyInStockIndex: number = this.findProductIndex(product);
    const productInStockList: Stock = this.stocks[allReadyInStockIndex];
    if (allReadyInStockIndex >= 0 && productInStockList.count > 0) {
      const tempCountOfProduct: number = productInStockList.count - count;
      if (tempCountOfProduct >= 0) {
        return productInStockList;
      } else {
        //return false;
        throw new Error('Shop doesnt have this amount of this product');
      }
    } else {
      throw new Error(
        'There is no ' + product.name + ' available right now to buy'
      );
    }
  }
  sellProduct(product: Product, count: number): void {
    const productToSell: Stock = this.allowToSellProduct(product, count);
    const tempCountOfProduct: number = productToSell.count - count;
    let tempBorrowOfProduct: number;
    if (productToSell.borrow > count) {
      tempBorrowOfProduct = productToSell.borrow - count;
      productToSell.borrow = tempBorrowOfProduct;
    } else {
      tempBorrowOfProduct = productToSell.borrow;
      productToSell.borrow = 0;
    }
    this.payTaxes(tempBorrowOfProduct, product);
    productToSell.count = tempCountOfProduct;
    this.bankMoney +=
      ((count -tempBorrowOfProduct)+Shop.debtRatio * tempBorrowOfProduct) * product.costNumber;
  }
  payTaxes(borrow: number, product: Product): void {
    this.wholesale.bankMoney += borrow * product.costNumber;
  }
  restockProduct(product: Product, count: number): void {
    this.bankMoney -= product.costNumber * count;
    this.addProductToStock(count, product, count);
  }
  printData(printer: Printer): void {
    printer.print(this.name + ' ' + this.bankMoney + '$');
    this.stocks.forEach((value) => {
      printer.print(value.count + '');
      value.listOfProduct(printer);
    });
  }
}
