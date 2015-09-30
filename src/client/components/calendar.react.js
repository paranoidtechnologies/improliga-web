import Component from './component.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import moment from 'moment';
import React from 'react';
import Week from './calendar/week.react';
import './calendar/responsive.styl';

export default class Calendar extends Component {
  static propTypes = {
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    month: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    weekStart: React.PropTypes.number.isRequired
  }

  static defaultProps = {
    items: [],
    month: moment(),
    weekStart: 1
  }

  getFirstDay() {
    const {month, weekStart} = this.props;
    let first = month.clone().startOf('month');

    while (first.isoWeekday() != weekStart) {
      first.subtract(1, 'day');
    }

    return first;
  }

  getLastDay() {
    const {month, weekStart} = this.props;
    let last = month.clone().endOf('month');

    while (last.isoWeekday() != weekStart) {
      last.add(1, 'day');
    }

    if (last.isSame(month, 'month')) {
      last.add(1, 'week');
    }

    return last.subtract(1, 'day');
  }

  renderHead() {
    const {msg, weekStart} = this.props;

    let str = [];
    let day = weekStart;

    for (let i = 0; i < 7; i++) {
      if (day > 7) {
        day = 1;
      }

      str.push(<div className="cal-cell1 ui-day" key={day}>{msg['day' + day]}</div>);
      day ++;
    }

    return str;
  }

  renderBody() {
    const {items, month, msg, weekStart} = this.props;
    const first = this.getFirstDay();
    const last = this.getLastDay();

    let iter = 0;
    let str = [];
    let day = first.clone();

    while (day.isBefore(last)) {
      str.push(<Week date={day.clone()} items={items} key={iter++} month={month} msg={msg} weekStart={weekStart} />);
      day = day.add(1, 'week');
    }

    return str;
  }

  render() {
    return (
      <div className="ui-calendar">
        <div className="cal-row-fluid cal-row-head ui-calendar-head" ref="head">
          {this.renderHead()}
        </div>

        <div className="cal-month-box ui-calendar-body" ref="body">
          {this.renderBody()}
        </div>
      </div>
    );
  }
}
