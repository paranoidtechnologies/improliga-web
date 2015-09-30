import Event from '../../models/event';
import {Record} from 'immutable';
import {actions} from './actions';
import moment from 'moment';

const initialState = new (Record({
  list: [],
  calendar: []
}));

const revive = state => initialState.merge({
  list: state.get('list').map(event => new Event(event))
});

export function wakeUpEvent(item) {
  if (item.start) {
    item.start = moment(item.start, 'YYYY-MM-DD');
  }

  if (item.end) {
    item.end = moment(item.end, 'YYYY-MM-DD');
  }

  return item;
};

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
