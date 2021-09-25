import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Product extends Component {
  @service('shopping-cart') cart;
  @tracked quantity = 0;
  @tracked total = 0;

  @action
  addItem(itemId, itemPrice) {
    this.quantity++;
    this.total = (this.quantity * itemPrice).toFixed(2);
    this.cart.update(itemId, this.quantity, this.total);
  }

  @action
  removeItem(itemId, itemPrice) {
    this.quantity >= 1 ? this.quantity-- : 0;
    this.total = this.quantity >= 1 ? (this.total - itemPrice).toFixed(2) : 0;
    this.cart.update(itemId, this.quantity, this.total);
  }

  @action
  clearItem(itemId) {
    this.quantity = 0;
    this.total = 0;
    this.cart.empty(itemId);
  }
}
