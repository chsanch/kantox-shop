import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class OrderSummaryComponent extends Component {
  @service('shopping-cart') cart;
}
