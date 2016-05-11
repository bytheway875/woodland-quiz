import Ember from 'ember';

export default Ember.Component.extend({
  percentage: Ember.computed('option.voteCount', 'poll.voteCount', function(){
    if(this.get('poll.voteCount') > 0 && this.get('option.voteCount') > 0){
      return this.get('option.voteCount') / this.get('poll.voteCount');
    } else {
      return 0;
    }
  })
});
