import DS from 'ember-data';

export default Ember.Object.extend({
  toggleOption(option){
    if (this.get('option') === option) {
      option = null
    }
    this.set('option', option);
  }
});
