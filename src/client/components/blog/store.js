import Article from '../../models/article';
import {Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  detail: null,
  list: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(item => new Article(item))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.loadBlogItemDetail:
    if (payload && payload[0]) {
      return state.set('detail', payload[0]);
    }

  case actions.loadBlog:
    return state.set('list', payload ? payload.list : []);
  }

  return state;
}
