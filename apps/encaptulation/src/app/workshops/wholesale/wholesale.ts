import { Product } from '../product/product';

export class Wholesale {
  constructor(
    private name: string,
    public bankMoney: number,
    private products: Product[] = []
  ) {}

  findProductIndex(product: Product): number {
    return this.products.findIndex((obj) => {
      const nameInStock: string = obj.name;
      return nameInStock === product.name;
    });
  }
  findProductPrice(product: Product): number {
    const allReadyInProductIndex: number = this.findProductIndex(product);
    if (allReadyInProductIndex >= 0) {
      return this.products[allReadyInProductIndex].costNumber;
    } else {
      throw new Error('Product does not exist in ' + this.name);
    }
  }

  addProductToProducts(product: Product): void {
    const allReadyInProductIndex: number = this.findProductIndex(product);
    if (allReadyInProductIndex >= 0) {
      // this.products[allReadyInStockIndex].count =
      //   this.products[allReadyInStockIndex].count + count;
    } else {
      this.products.push(product);
    }
  }
}
