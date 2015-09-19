import Component from '../component.react';
import Day from './day.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';

export default class Week extends Component {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    month: React.PropTypes.object,
    msg: React.PropTypes.object.isRequired,
    weekStart: React.PropTypes.number.isRequired
  }

  static defaultProps = {
    items: [],
    weekStart: 1
  }

  getFirstDay() {
    const {date, weekStart} = this.props;
    let first = date.clone();

    while (first.isoWeekday() != weekStart) {
      first.subtract(1, 'day');
    }

    return first;
  }

  getLastDay() {
    return this.getFirstDay().add(6, 'days');
  }

  render() {
    const {items, month, msg, weekStart} = this.props;
    const first = this.getFirstDay();
    const last = this.getLastDay().add(1, 'day');

    let iter = 0;
    let str = [];
    let day = first.clone();

    while (day.isBefore(last)) {
      str.push(<Day date={day.clone()} items={items} key={iter++} month={month} msg={msg} />);
      day = day.add(1, 'day');
    }

    return (
      <div className="cal-row-fluid cal-before-eventlist ui-calendar-week">
        {str}
      </div>
    );
  }
}
