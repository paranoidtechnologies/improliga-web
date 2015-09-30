import Component from '../component.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import DayItem from './dayItem.react';

export default class Day extends Component {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    month: React.PropTypes.object,
    msg: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    items: []
  }

  render() {
    const {date, items, month, msg} = this.props;
    let cname = ['cal-month-day'];

    if (month) {
      if (date.isSame(month, 'month')) {
        cname.push('cal-day-inmonth');
      } else {
        cname.push('cal-day-outmonth');
      }
    }

    return (
      <div className="cal-cell1 cal-cell">
        <div className={cname.join(' ')} data-date={date.format('YYYY-MM-DD')}>
          <div className="day-number">{date.format('D')}</div>

          <div className="events-list">
            {items.map(function(item, key) {
              return <DayItem id={item.id} image={item.image} key={key} name={item.name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
