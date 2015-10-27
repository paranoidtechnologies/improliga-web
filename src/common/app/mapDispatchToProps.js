import * as blogActions from '../blog/actions';
import * as eventsActions from '../events/actions';
import * as showsActions from '../shows/actions';
import * as workshopsActions from '../workshops/actions';
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

const actions = [
  blogActions,
  showsActions,
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
