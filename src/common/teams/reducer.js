import Team from './team';
import {List, Record} from 'immutable';
import {LOAD_TEAMS_PAGE, LOAD_TEAM_DETAIL} from './actions';

const initialState = new (Record({
  list: [],
  detail: null
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Team(event)),
  detail: new Team(state.get('detail'))
});

export default function teamsReducer(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case LOAD_TEAMS_PAGE: {
      let data;

      if (payload.data) {
        data = payload.data.map((item) => new Team(item));
      }

      return state.set('list', new List(data));
    }

    case LOAD_TEAM_DETAIL:  {
      if (payload.data) {
        return state.set('detail', payload.data[0]);
      }
    }
  }

  return state;
}
