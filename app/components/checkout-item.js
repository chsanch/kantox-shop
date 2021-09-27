import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CheckoutItemComponent extends Component {
  get totalCost() {
    return this.args.product.total - this.args.product.discount;
  }

  @action
  clearItem(itemId) {
    this.args.clearItem(itemId);
  }
}
