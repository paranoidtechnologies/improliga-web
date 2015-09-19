import Calendar from '../../../components/calendar.react';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class ShowsCalendar extends Calendar {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
  }

  componentDidMount(next) {
    return this.props.actions.loadCalendarEvents(this.props.month);
  }
}
