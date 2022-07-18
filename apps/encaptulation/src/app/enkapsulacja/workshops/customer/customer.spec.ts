import { Product } from '../product/product';
import { Wallet } from '../wallet/wallet';
import { Customer } from './customer';

describe('Customer', () => {
  const John = new Customer('John Doe', new Wallet(1));
  const pear = new Product('yellow pear', 2);
  const message ='You have not enough money to buy it';
  it('is not possible to buy a product when you doesnt have money', () => {
    expect(()=>{

      John.buy(pear)
    }
    ).toThrow(message);
  });
});
