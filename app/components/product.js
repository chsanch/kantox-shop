import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Product extends Component {
  @tracked quantity = 0;
  @tracked total = 0;

  @action
  addItem() {
    this.quantity++;
  }

  @action
  removeItem() {
    this.quantity >= 1 ? this.quantity-- : 0;
  }
}
