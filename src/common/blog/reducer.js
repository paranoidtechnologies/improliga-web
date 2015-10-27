import Article from './article';
import {List, Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  detail: null,
  list: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(item => new Article(item))
});

export default function blogReducer(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case actions.loadBlogItemDetail: {
      let data = null;

      if (payload && payload[0]) {
        data = new Article(payload[0]);
      }

      return state.set('detail', data);
    }

    case actions.loadBlog: {
      let data = null;

      if (payload) {
        data = payload.list.map(item => new Article(item));
      }

      return state.set('list', new List(data));
    }
  }

  return state;
}
