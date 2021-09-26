import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';

export default class ShoppingCartService extends Service {
  storage = {};

  constructor() {
    super(...arguments);
    this.storage.items = tracked(A([]));
    this.storage.summary = tracked({
      total: 0,
      items: 0,
      discount: 0,
      total_cost: 0,
    });
  }

  update(product, quantity, total) {
    const itemId = this.storage.items.findIndex(
      (item) => item.id === product.id
    );
    if (itemId === -1) {
      this.storage.items.pushObject({
        ...product.toJSON({ includeId: true }),
        quantity: quantity,
        total: total,
      });
    } else {
      this.storage.items[itemId].quantity = Number(quantity);
      this.storage.items[itemId].total = Number(total);
    }
    this._calculateSummary();
    this._calculateDiscounts();
  }

  empty(id) {
    const itemId = this.storage.items.findIndex((item) => item.id === id);

    if (itemId != -1) {
      this.storage.items.removeAt(itemId);
      this._calculateSummary();
      this._calculateDiscounts();
    }
  }

  _calculateSummary() {
    let totalItems = 0;
    let totalPrice = 0;
    this.storage.items.forEach((item) => {
      totalItems += Number(item.quantity);
      totalPrice += Number(item.total);
    });
    this.storage.summary.items = Number(totalItems);
    this.storage.summary.total = Number(totalPrice).toFixed(2);
  }

  _calculateDiscounts() {
    // Tea
    const tea = this.storage.items.find(
      (item) => item.id === '1' && item.quantity >= 2
    );
    const strawberry = this.storage.items.find(
      (item) => item.id === '2' && item.quantity >= 3
    );
    const coffee = this.storage.items.find(
      (item) => item.id === '3' && item.quantity >= 3
    );
    let discount = 0;

    if (tea) {
      const { quantity, price } = tea;
      discount =
        discount + (quantity % 2) === 0
          ? (quantity * price) / 2
          : ((quantity - 1) * price) / 2;
    }

    if (strawberry) {
      const { quantity, price } = strawberry;
      discount = discount + (price - 4.5) * quantity;
    }

    if (coffee) {
      const { quantity, price } = coffee;
      discount = discount + price * (1 / 3) * quantity;
    }

    this.storage.summary.discount = discount.toFixed(2);
    this.storage.summary.total_cost = (
      this.storage.summary.total - discount
    ).toFixed(2);
  }
}
