import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Product extends Component {
  @tracked quantity = 0;
  @tracked total = 0;

  @action
  addItem(itemId, itemPrice) {
    this.quantity++;
    this.total = (this.quantity * itemPrice).toFixed(2);
    this.args.updateItem(itemId, this.quantity, this.total, itemPrice);
  }

  @action
  removeItem(itemId, itemPrice) {
    this.quantity >= 1 ? this.quantity-- : 0;
    this.total = this.quantity >= 1 ? (this.total - itemPrice).toFixed(2) : 0;
    this.args.updateItem(itemId, this.quantity, this.total);
  }

  @action
  clearItem(itemId) {
    this.quantity = 0;
    this.total = 0;
    this.args.clearItem(itemId);
  }
}
