import Event from '../../models/event';
import {Record} from 'immutable';
import {actions} from './actions';
import {wakeUpEvent} from '../../lib/events';

const initialState = new (Record({
  detail: null
}));

const revive = state => initialState.merge({
  detail: new Event(wakeUpEvent(state))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.loadEventDetail:
    if (payload && payload.list && payload.list[0]) {
      const item = wakeUpEvent(payload.list[0]);

      return state.set('detail', item);
    }
  }

  return state;
}
