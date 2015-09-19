import React from 'react';
import Component from '../component.react';
import Day from './day.react';

export default class Week extends Component {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    items: React.PropTypes.array,
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
    const {date, weekStart} = this.props;
    let last = date.clone();

    while (last.isoWeekday() != weekStart) {
      last.add(1, 'day');
    }

    return last.subtract(1, 'day');
  }

  render() {
    const {items, weekStart} = this.props;
    const first = this.getFirstDay();
    const last = this.getLastDay();

    let iter = 0;
    let str = [];
    let day = first.clone();

    while (day.isBefore(last)) {
      str.push(<Day date={day.clone()} items={items} key={iter} msg={msg} />);
      day = day.add(1, 'day');
    }
console.log(str);
    return (
      <div class="ui-calendar-week">
        {str}
      </div>
    );
  }
}
