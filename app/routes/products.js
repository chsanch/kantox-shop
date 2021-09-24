import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
  model() {
    console.log('here');
    return this.store.findAll('product');
  }
}
