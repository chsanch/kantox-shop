import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class Product extends Component {

  @action
  updateItem(id, quantity, total, price) {
    this.args.cart.update(id, quantity, total, price);
  }

  @action
  clearItem(itemId) {
    this.args.cart.empty(itemId);
  }

}
