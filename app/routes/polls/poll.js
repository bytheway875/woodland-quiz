import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.get('store').findPoll(params.poll_id)
  }
});
