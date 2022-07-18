
import { SpyPrinter } from "../printer/printer.spec";
import { Wallet } from "./wallet"

describe('Wallet',()=>{
  const spy =new SpyPrinter();
const NotEnoughFounts='Nie masz tylu pieniedzy w portfelu';
  it('is not possible to create wallet with negative number',()=>{
    expect(()=>{

      const wallet = new Wallet(-2);
    }).toThrow(NotEnoughFounts);

  });

  it('It is possible to widraw money',()=>{

    const wallet = new Wallet(5);

    const withdrawMoney =wallet.withdraw(2);
    wallet.balance(spy)

    expect(withdrawMoney).toStrictEqual(2);
    expect(spy.data).toStrictEqual('3$');
  });

  it('shoud not to be possible to withdraw more money',()=>{
    const wallet = new Wallet(5);


    expect(()=>{
       wallet.withdraw(6);
    }).toThrow(NotEnoughFounts)
  });
})
