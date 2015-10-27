import {Map, Record} from 'immutable';
import {SEND_CONTACT_FORM, SET_SUBJECT} from './actions';

const initialState = new (Record({
  formSubject: null,
  formResponse: {
    error: null,
    result: null,
    status: null,
  },
}));

const revive = (state) => initialState.merge({
  formResponse: state.get('formResponse'),
  formSubject: null,
});

export default function contactReducer(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case SEND_CONTACT_FORM: {
      return state.set('formResponse', new Map({
        error: payload.message,
        result: payload.status >= 200 && payload.status < 300,
        status: payload.status,
      }));
    }

    case SET_SUBJECT: {
      return state.set('formSubject', payload);
    }
  }


  return state;
}
