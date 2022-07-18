import { Printer } from '../printer/printer.interface';
import { Product } from '../product/product';
import { Wallet } from '../wallet/wallet';
import { Shop } from '../shop/shop';

export class Customer {
  constructor(
    private name: string,
    private wallet: Wallet,
    private products: Product[] = []
  ) {}
  buy(product: Product, count?: number, shop?: Shop): void {
    const priceOfProduct: number = product.costNumber;
    const moneyInWallet: number = this.wallet.money;
    if (count && shop) {
      shop.sellProduct(product, count);
    }

    if (moneyInWallet >= priceOfProduct) {
      this.products.push(product);
      this.wallet.withdraw(priceOfProduct);
    } else {
      throw new Error('You have not enough money to buy it');
    }
  }

  moneyLeft(printer: Printer): void {
    this.wallet.balance(printer);
  }
  listOfProducts(printer: Printer): void {
    if (this.products.length <= 0) {
      printer.print('No products');
    } else {
      this.products.forEach((value: Product) => {
        value.printData(printer);
      });
    }
  }
}
