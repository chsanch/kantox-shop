import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';
import Discount from './discount';

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
    this.discount = new Discount();
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
        discount: 0,
      });
    } else {
      this.storage.items[itemId].quantity = Number(quantity);
      this.storage.items[itemId].total = Number(total);
      this.storage.items[itemId].discount = this.discount.getDiscount(
        product,
        quantity
      );
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

  checkout() {
    this.storage.items = tracked(A([]));
    this.storage.summary = tracked({
      total: 0,
      items: 0,
      discount: 0,
      total_cost: 0,
    });
  }

  _calculateSummary() {
    let totalItems = 0;
    let totalPrice = 0;
    this.storage.items.forEach((item) => {
      totalItems += Number(item.quantity);
      totalPrice += Number(item.total);
    });
    this.storage.summary.items = Number(totalItems);
    this.storage.summary.total = Number(totalPrice);
  }

  _calculateDiscounts() {
    let discount = 0;
    this.storage.items.forEach((item) => {
      discount += Number(item.discount);
    });
    this.storage.summary.discount = Number(discount);
    this.storage.summary.total_cost = this.storage.summary.total - discount;
  }
}
