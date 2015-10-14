import Team from '../../models/team';
import {Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  list: null
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Team(event)),
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.loadTeamsPage:
    if (payload && payload.data) {
      return state.set('list', payload.data);
    }
  }

  return state;
}
