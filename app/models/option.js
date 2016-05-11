import DS from 'ember-data';

export default Ember.Object.extend({
  voteCount: Ember.computed('poll.votes.@ech.option', function(){
    return this.get('poll.votes').filterBy('option', this).get('length');
  })
});
