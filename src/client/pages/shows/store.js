import Event from '../../models/event';
import {Record} from 'immutable';
import {actions} from './actions';
import moment from 'moment';
import {wakeUpEvent} from '../../lib/events';

const initialState = new (Record({
  list: [],
  calendar: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case actions.loadEvents:
      if (payload && payload.list) {
        payload.list.forEach(function(item, index) {
          wakeUpEvent(item);
        });

        return state.set('list', payload.list);
      }

    case actions.loadCalendarEvents:

      if (payload && payload.list) {
        payload.list.forEach(function(item, index) {
          wakeUpEvent(item);
        });

        return state.set('calendar', payload.list);
      }
  }

  return state;
}
