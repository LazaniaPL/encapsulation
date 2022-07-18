import { Product } from "./product"

describe('Product',()=>{
  it('is not posible to create product with price lower than 0',()=>{

    expect(()=>{
      const freeRobux = new Product('Free Robux',-300);
    }).toThrow('Product cannot cost lower than 0')
  })
})
