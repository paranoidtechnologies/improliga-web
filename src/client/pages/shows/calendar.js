import Calendar from '../../components/calendar.react';
import React from 'react';

export default class ShowsCalendar extends Calendar {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    month: React.PropTypes.object.isRequired
  }
}
