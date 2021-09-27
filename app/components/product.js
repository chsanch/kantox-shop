import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Product extends Component {
  @tracked quantity = this._getQuantity(this.args.product);
  @tracked total = this._getTotal(this.args.product);

  @action
  addItem(product) {
    this.quantity++;
    this.total = this.quantity * product.price;
    this.args.updateItem(product, this.quantity, this.total);
  }

  @action
  removeItem(product) {
    this.quantity >= 1 ? this.quantity-- : 0;
    this.total = this.quantity >= 1 ? this.total - product.price : 0;
    this.args.updateItem(product, this.quantity, this.total);
  }

  @action
  clearItem(product) {
    this.quantity = 0;
    this.total = 0;
    this.args.clearItem(product.id);
  }

  _getQuantity(product) {
    const item = this.args.items
      ? this.args.items.find((item) => item.id === product.id)
      : null;
    return item ? item.quantity : 0;
  }

  _getTotal(product) {
    const item = this.args.items
      ? this.args.items.find((item) => item.id === product.id)
      : null;
    return item ? item.total : 0;
  }
}
