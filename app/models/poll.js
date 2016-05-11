import DS from 'ember-data';

export default Ember.Object.extend({
  voteCount: Ember.computed.alias('votes.length')
});
