import { test } from 'qunit';
import moduleForAcceptance from 'woodland-quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | vote on a poll');

test('visiting /vote-on-a-poll', function(assert) {
  visit('/vote-on-a-poll');

  andThen(function() {
    assert.equal(currentURL(), '/vote-on-a-poll');
  });
});
