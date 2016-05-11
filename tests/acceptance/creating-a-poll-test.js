import { test } from 'qunit';
import moduleForAcceptance from 'woodland-quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | creating a poll');

test('The poll form is displayed', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(findWithAssert('#question').length, 1, 'displays a question input');
    assert.equal(findWithAssert('.option').length, 3, 'displays answer option inputs' );
  });
});

test('I can submit the poll', function(assert) {
  visit('/');
  fillIn('#question', 'Which of the following is NOT part of the Woodland Wanderer Way?');
  fillIn('.option:eq(0)', 'Honesty');
  fillIn('.option:eq(1)', 'Integrity');
  fillIn('.option:eq(2)', 'Impatience');
  click('button');
  andThen(function() {
    assert.equal(currentRouteName(), 'polls.poll.index', 'transitions to the voting route');
    assert.ok(findWithAssert('h2').text().trim()
    .match(/Which of the following is NOT part of the Woodland Wanderer Way?/));
  })
})
