import Component from 'react-pure-render/component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {momentObj} from 'react-moment-proptypes';
import EventListItem from './listItem.react';
import React from 'react';

export default class EventDayList extends Component {
  static propTypes = {
    date: momentObj,
    formatDate: React.PropTypes.string.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object,
    pass: React.PropTypes.object,
  }

  render() {
    const {date, formatDate, items, msg, pass} = this.props;

    return (
      <div className="ui-event-day">
        <h3 className="day-title">{date.format(formatDate)}</h3>
        <div className="ui-list-items">
          {items.map(function(item, key) {
            return <EventListItem key={item.id} {...{item, items, msg, pass}} />;
          })}
        </div>
      </div>
    );
  }
};
