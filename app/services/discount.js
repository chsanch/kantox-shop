export default class Discount {
  getDiscount(product, quantity) {
    let discount = 0;
    if (product.code === 'GR1' && quantity >= 2) {
      const { price } = product;
      discount =
        discount + (quantity % 2) === 0
          ? (quantity * price) / 2
          : ((quantity - 1) * price) / 2;
    }

    if (product.code === 'SR1' && quantity >= 3) {
      const { price } = product;
      discount = discount + (price - 4.5) * quantity;
    }

    if (product.code === 'CF1' && quantity >= 3) {
      const { price } = product;
      discount = discount + price * (1 / 3) * quantity;
    }

    return discount;
  }
}
