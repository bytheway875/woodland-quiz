import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  model(){
    const poll = this.modelFor('polls.poll');
    debugger;
    return this.get('store').createVote(poll);
  },

  actions: {
    vote(vote){
      this.get('store').saveVote(vote);
      this.transitionTo('polls.poll.results');

    },
    toggleOption(vote, option) {
      vote.toggleOption(option);
    }
  }
});
