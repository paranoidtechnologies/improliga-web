import List from '../browser/list.react';
import Item from '../browser/item.react';
import {momentObj} from 'react-moment-proptypes';
import React from 'react';

export default class EventDayList extends List {
  static propTypes = {
    date: momentObj,
    formatDate: React.PropTypes.string.isRequired,
  }

  render() {
    const {date, draw, formatDate, items, msg, pass} = this.props;

    return (
      <div className="ui-event-day">
        <h3 className="day-title">{date.format(formatDate)}</h3>
        <div className="ui-list-items">
          {items.map(function(item, key) {
            return <Item key={item.id} {...{draw, item, items, msg, pass}} />;
          })}
        </div>
      </div>
    );
  }
};
