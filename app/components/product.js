import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Product extends Component {
  @tracked quantity = 0;
  @tracked total = 0;

  @action
  addItem(product) {
    this.quantity++;
    this.total = (this.quantity * product.price).toFixed(2);
    this.args.updateItem(product, this.quantity, this.total);
  }

  @action
  removeItem(product) {
    this.quantity >= 1 ? this.quantity-- : 0;
    this.total =
      this.quantity >= 1 ? (this.total - product.price).toFixed(2) : 0;
    this.args.updateItem(product, this.quantity, this.total);
  }

  @action
  clearItem(product) {
    this.quantity = 0;
    this.total = 0;
    this.args.clearItem(product.id);
  }
}
