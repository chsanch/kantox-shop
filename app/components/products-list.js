import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class Product extends Component {
  @service('shopping-cart') cart;
}
