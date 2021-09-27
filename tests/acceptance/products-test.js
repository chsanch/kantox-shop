import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | products', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /products', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    //user should see 3 products
    assert.dom('div.product-item').exists({ count: 3 });
  });
});
