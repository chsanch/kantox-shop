import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | checkout-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CheckoutItem />`);

    assert.dom(this.element).hasText('Remove £0 £0 £0');

    // // Template block usage:
    // await render(hbs`
    //   <CheckoutItem>
    //     template block text
    //   </CheckoutItem>
    // `);

    // assert.dom(this.element).hasText('');
  });
});
