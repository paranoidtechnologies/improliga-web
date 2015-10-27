import {combineReducers} from 'redux';

import blog from '../blog/reducer';
import contact from '../contact/reducer';
import device from '../device/reducer';
import events from '../events/reducer';
import intl from '../intl/reducer';
import shows from '../shows/reducer';
import teams from '../teams/reducer';
import workshops from '../workshops/reducer';

const appReducer = combineReducers({
  blog,
  contact,
  device,
  events,
  intl,
  shows,
  teams,
  workshops
});

export default appReducer;
