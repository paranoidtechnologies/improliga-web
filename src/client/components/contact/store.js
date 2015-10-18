import {Map, Record} from 'immutable';
import {actions} from './actions';

const initialState = new (Record({
  formResponse: {
    error: null,
    result: null,
    status: null,
  },
}));

const revive = (state) => initialState.merge({
  formResponse: state.get('formResponse')
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

  case actions.sendContactForm:
    return state.set('formResponse', new Map({
      error: payload.message,
      result: payload.status >= 200 && payload.status < 300,
      status: payload.status,
    }));
  }

  return state;
}
