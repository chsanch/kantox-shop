import { helper } from '@ember/component/helper';

export default helper(function currencyParser(input) {
  const [ price, currency ] = input

  return `${currency ?? '£' }${price.toFixed(2)}`;
});
