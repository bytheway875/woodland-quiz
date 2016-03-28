import { test } from 'qunit';
import moduleForAcceptance from 'woodland-quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | render layout');

test('renders index h1', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(findWithAssert('h1').text().trim(), 'Wilderness Safety Quiz', 'Page h1 is Wilderness Safety Quiz');
  });
});
