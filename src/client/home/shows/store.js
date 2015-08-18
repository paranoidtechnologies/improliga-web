import Event from '../../models/event';
import {Range, Record} from 'immutable';
import {actions} from './actions';

// Records are good. https://facebook.github.io/immutable-js/docs/#/Record
const initialState = new (Record({
  list: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case actions.addTodo:
      return state
        .update('list', list => {
          const newTodo = payload.merge({id: getRandomString()});
          return list.push(newTodo);
        })
        .set('newTodo', new Todo);

    case actions.clearAll:
      return state
        .update('list', list => list.clear())
        .set('newTodo', new Todo);
  }

  return state;
}
