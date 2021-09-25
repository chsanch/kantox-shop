import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';

export default class ShoppingCartService extends Service {
  storage = {};

  constructor() {
    super(...arguments);
    this.storage.items = tracked(A([]));
    this.storage.summary = tracked({ total: 0, items: 0 });
  }

  update(id, quantity, total) {
    const itemId = this.storage.items.findIndex(
      (item) => item.product_id === id
    );
    if (itemId === -1) {
      this.storage.items.pushObject({
        product_id: id,
        quantity: quantity,
        total: total,
      });
    } else {
      this.storage.items[itemId].quantity = Number(quantity);
      this.storage.items[itemId].total = Number(total);
    }
    this._calculateSummary();
  }

  empty(id) {
    const itemId = this.storage.items.findIndex(
      (item) => item.product_id === id
    );

    if (itemId != -1) {
      this.storage.items.removeAt(itemId);
      this._calculateSummary();
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
}
