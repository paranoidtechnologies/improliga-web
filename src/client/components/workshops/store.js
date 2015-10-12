import Event from '../../models/event';
import {Record} from 'immutable';
import {actions} from './actions';
import {wakeUpEvent} from '../../lib/events';

const initialState = new (Record({
  list: [],
  calendar: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event)),
  calendar: state.get('calendar').map(event => new Event(event))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.loadCalendarWorkshops:

    if (payload && payload.list) {
      payload.list.forEach(function(item, index) {
        wakeUpEvent(item);
      });

      return state.set('calendar', payload.list);
    }
  }

  return state;
}
