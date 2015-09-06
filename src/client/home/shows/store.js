import Event from '../../models/event';
import {Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  list: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case actions.loadEvents:
      return state.set('list', payload);
  }

  return state;
}
