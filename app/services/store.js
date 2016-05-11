import Ember from 'ember';
import Poll from 'woodland-quiz/models/poll';
import Option from 'woodland-quiz/models/option';
import Vote from 'woodland-quiz/models/vote';

const polls = [];
const votes = [];

let poll1 = Poll.create({
  question: 'Which of the following is NOT part of the Woodland Wanderer Way?',
  options: [],
  votes: [],
  id: 1
});
poll1.get('options').pushObjects([
  Option.create({id: '1', label: 'Honesty', poll: poll1}),
  Option.create({id: '2', label: 'Integrity', poll: poll1}),
  Option.create({id: '3', label: 'Impatience', poll: poll1})
]);
polls.pushObject(poll1);

let poll2 = Poll.create({
  question: 'What is the best part about being a Woodland Creature?',
  options: [],
  votes: [],
  id: 2
});
poll2.get('options').pushObjects([
  Option.create({id: '4', label: 'Being Cute', poll: poll2}),
  Option.create({id: '5', label: 'Being Cuddly', poll: poll2}),
  Option.create({id: '6', label: 'Biting People', poll: poll2})
]);
polls.pushObject(poll2);

export default Ember.Service.extend({
  findAllPolls() { return polls; },
  findPoll(id) { return this.findAllPolls().findBy('id', parseInt(id)) },
  createPoll(){
    const poll = Poll.create({
      options: [],
      votes: []
    });
    poll.get('options').pushObjects([
      Option.create({ poll: poll }),
      Option.create({ poll: poll }),
      Option.create({ poll: poll })
    ]);
    return poll;
  },
  createVote(poll){
    return Vote.create({
      poll: poll
    });
  },
  savePoll(poll){
    polls.pushObject(poll);
    poll.set('id', polls.length);
    return poll;
  },
  saveVote(vote){
    const poll = vote.get('poll');
    poll.get('votes').pushObject(vote);
    return vote;
  }
});
