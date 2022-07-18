import { Printer } from '../printer/printer.interface';

export class Wallet {
  constructor(public money: number) {
    Wallet.assertMoneyIsNotNegative(money);
  }
  private static assertMoneyIsNotNegative(money: number) {
    if (money < 0) {
      throw new Error('Nie masz tylu pieniedzy w portfelu');
    }
  }
  withdraw(money: number): number {
    const moneyAfterWithdrawl = this.money - money;
    Wallet.assertMoneyIsNotNegative(moneyAfterWithdrawl);

    this.money = moneyAfterWithdrawl;

    return money;
  }

  balance(printer: Printer): void {
    printer.print(this.money + '$');
  }
}
