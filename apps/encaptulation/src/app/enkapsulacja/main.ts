import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Customer } from './app/workshops/customer/customer';
import { ConsoleLogPrinter } from './app/workshops/printer/console-log-printer';
import { Product } from './app/workshops/product/product';
import { Shop } from './app/workshops/shop/shop';
import { Wallet } from './app/workshops/wallet/wallet';
import { Wholesale } from './app/workshops/wholesale/wholesale';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
const printer = new ConsoleLogPrinter();

// zad 1
// const wallet = new Wallet(5);
// wallet.withdraw(2);

// wallet.balance(printer)

// zad 2
// const john = new Customer('John Doe', new Wallet(10));
// const apple = new Product('red apple', 1);

// const coolerJohn = new Customer('John Doe', new Wallet(1));
// const pear = new Product('yellow pear', 2);
// john.moneyLeft(printer);
// john.listOfProducts(printer);
// john.buy(apple)
// john.moneyLeft(printer);
// john.listOfProducts(printer);

// console.log('new john')

// coolerJohn.moneyLeft(printer);
// coolerJohn.listOfProducts(printer);
// coolerJohn.buy(pear)
// coolerJohn.moneyLeft(printer);
// coolerJohn.listOfProducts(printer);

// zad 3
// const john = new Customer('John Doe', new Wallet(10));
// const apple = new Product('red apple', 1);
// const AppleStore = new Shop('Apple Store', 0);

// AppleStore.addProductToStock(1, apple);
// AppleStore.printData(printer);
// john.buy(apple, 3, AppleStore);
// AppleStore.printData(printer);
//john.listOfProducts(printer);

// zad 4

const john = new Customer('John Doe', new Wallet(10));
const apple = new Product('red apple', 1);

const Wallmart = new Wholesale('Wallmart',0);
const AppleStore = new Shop('Apple Store', 0,[],Wallmart);
Wallmart.addProductToProducts(apple);

// AppleStore.addProductToStock(0, apple);
// AppleStore.restockProduct(apple,10);
// AppleStore.printData(printer);

AppleStore.addProductToStock(0, apple);
AppleStore.restockProduct(apple,1);
AppleStore.printData(printer);
john.buy(apple, 1, AppleStore);
 AppleStore.printData(printer);
