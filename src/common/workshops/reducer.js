import {Event, wakeUpEvent} from '../events/event';
import {List, Record} from 'immutable';
import {LOAD_WORKSHOPS_CALENDAR} from './actions';

const initialState = new (Record({
  list: [],
  calendar: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event)),
  calendar: state.get('calendar').map(event => new Event(event))
});

export default function workshopsReducer(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case LOAD_WORKSHOPS_CALENDAR: {
      let data;

      if (payload.list) {
        data = payload.list.map(item => new Event(wakeUpEvent(item)));
      }

      return state.set('calendar', new List(data));
    }
  }

  return state;
}
