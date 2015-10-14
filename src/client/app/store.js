import immutable from 'immutable';

import showsStore from '../components/shows/store';
import workshopsStore from '../components/workshops/store';
import eventsStore from '../components/events/store';
import newsStore from '../components/news/store';
import teamsStore from '../components/teams/store';
import intlStore from '../intl/store';

export default function(state, action, payload) {
  // Create immutable from JSON asap to prevent side effects accidents.
  if (!action) state = immutable.fromJS(state);

  // Btw, this can be refactored, but leaving it explicit for now.
  state = state
    .update('intl', (s) => intlStore(s, action, payload))
    .update('news', (s) => newsStore(s, action, payload))
    .update('events', (s) => eventsStore(s, action, payload))
    .update('shows', (s) => showsStore(s, action, payload))
    .update('teams', (s) => teamsStore(s, action, payload))
    .update('workshops', (s) => workshopsStore(s, action, payload));

  // We can reduce and compose stores. Note we don't need no waitFor.
  state = state
    // Reduced store.
    .update('msg', (s) => state.get('intl').messages);

  return state;
}
