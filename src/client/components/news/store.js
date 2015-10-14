import News from '../../models/news';
import {Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  detail: null,
  list: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(item => new News(item))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.loadNewsItemDetail:
    if (payload && payload[0]) {
      return state.set('detail', payload[0]);
    }

  case actions.loadNews:
    return state.set('list', payload ? payload.list : []);
  }

  return state;
}
