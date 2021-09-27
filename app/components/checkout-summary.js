import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CheckoutSummaryComponent extends Component {
  @service('shopping-cart') cart;
  @service router;

  @action
  clearItem(itemId) {
    this.cart.empty(itemId);
  }

  @action
  checkout() {
    this.cart.checkout();
    this.router.transitionTo('products');
  }
}
