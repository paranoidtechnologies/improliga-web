import React from 'react';
import Component from './component.react';
import moment from 'moment';
import Week from './calendar/week.react';

export default class Calendar extends Component {
  static propTypes = {
    items: React.PropTypes.array,
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

      str.push(<div className="ui-day" key={day}>{msg['day' + day]}</div>);
      day ++;
    }

    return str;
  }

  renderBody() {
    const {items, msg, weekStart} = this.props;
    const first = this.getFirstDay();
    const last = this.getLastDay();

    let iter = 0;
    let str = [];
    let day = first.clone();

    while (day.isBefore(last)) {
      str.push(<Week date={day.clone()} items={items} key={iter} msg={msg} weekStart={weekStart} />);
      day = day.add(1, 'week');
    }

    return str;
  }

  render() {
    return (
      <div className="ui-calendar">
        <div className="ui-calendar-head" ref="head">
          {this.renderHead()}
        </div>

        <div className="ui-calendar-body" ref="body">
          {this.renderBody()}
        </div>
      </div>
    );
  }
}
