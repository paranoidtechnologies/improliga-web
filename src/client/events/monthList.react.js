import Component from 'react-pure-render/component';
import EventDayList from './dayList.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';

export default class EventMonthList extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object,
    pass: React.PropTypes.object,
  }

  render() {
    const {draw, items, msg, pass} = this.props;
    const {formatDate} = pass;

    let days = [];
    let day = null;

    items.forEach(function(item) {
      const itemDay = item.start.format('YYYY-MM-DD');

      if (!day || day.dateString !== itemDay) {
        day = {
          date: item.start.clone(),
          dateString: item.start.format('YYYY-MM-DD'),
          items: [],
        };

        days.push(day);
      }

      day.items.push(item);
    });

    return (
      <div className="ui-browser-list">
        <div className="ui-list-items">
          {days.map(function(item, key) {
            const {date, items} = item;

            return <EventDayList key={item.dateString} {...{draw, formatDate, msg, pass, date, items}} />;
          })}
        </div>
      </div>
    );
  }
};
