import Team from '../../models/team';
import {Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  list: [],
  detail: null
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Team(event)),
  detail: new Team(state.get('detail'))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.loadTeamsPage:
    if (payload && payload.data) {
      return state.set('list', payload.data);
    }

  case actions.loadTeamDetail:
    if (payload && payload.data) {
      return state.set('detail', payload.data[0]);
    }
  }

  return state;
}
