import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CheckoutRoute extends Route {
  @service('shopping-cart') cart;
  model() {
    return this.cart.storage.items;
  }
}
