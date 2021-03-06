import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('number') price;
  @attr('string') code;
  @attr('string') currency;
}
