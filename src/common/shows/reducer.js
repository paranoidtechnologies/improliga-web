import {List} from 'immutable';
import {Event, wakeUpEvent} from '../events/event';
import {Record} from 'immutable';
import {LOAD_UPCOMING, LOAD_CALENDAR} from './actions';

const initialState = new (Record({
  list: [],
  calendar: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event)),
  calendar: state.get('calendar').map(event => new Event(event))
});

export default function showsReducer(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case LOAD_UPCOMING: {
      let data;

      if (payload.list) {
        data = payload.list.map(item => new Event(wakeUpEvent(item)));

      }

      return state.set('list', new List(data));
    }

    case LOAD_CALENDAR: {
      let data;

      if (payload.list) {
        data = payload.list.map(item => new Event(wakeUpEvent(item)));
      }

      return state.set('calendar', new List(data));
    }
  }

  return state;
}
