import Component from 'react-pure-render/component';
import React from 'react';
import {Link} from 'react-router';
import {momentObj} from 'react-moment-proptypes';
import EventCalendar from '../calendar/calendar.react';
import EventMonthList from './monthList.react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class EventMonth extends Component {
  static propTypes = {
    formatDate: React.PropTypes.string.isRequired,
    formatTime: React.PropTypes.string.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    listDraw: React.PropTypes.func.isRequired,
    month: momentObj,
    msg: React.PropTypes.object.isRequired,
    routeArchive: React.PropTypes.string.isRequired,
  };

  render() {
    const {formatDate, formatTime, items, listDraw, month, msg, routeArchive} = this.props;
    const monthFormat = 'YYYY-MM';
    const prev = month.clone().subtract(1, 'month');
    const next = month.clone().add(1, 'month');
    const monthText = msg.months[month.month()];
    const propsCalendar = {
      items: items,
      month: month,
      msg: msg.calendar,
    };

    const propsList = {
      draw: listDraw,
      items: items,
      month: month,
      msg: msg.list,
      pass: {
        formatDate: formatDate,
        formatTime: formatTime,
      }
    };

    return (<div className="ui-event-month-list">
      <div className="text-center month-list-title">
        <h1>
          <span className="title-label">{msg.title + ' '}</span>
          <span className="title-month">{monthText + ' '}</span>
          <span className="title-year">{month.format('YYYY')}</span>
        </h1>
      </div>

      <section className="controls">
        <div className="col-xs-6 text-center">
          <Link params={{month: prev.format(monthFormat)}} to={routeArchive}>&lt; {msg.months[prev.month()]} {prev.format('YYYY')}</Link>
        </div>
        <div className="col-xs-6 text-center">
          <Link params={{month: next.format(monthFormat)}} to={routeArchive}>{msg.months[next.month()]} {next.format('YYYY')} &gt;</Link>
        </div>
        <div className="cleaner" />
      </section>

      <section className="col-sm-7">
        <EventCalendar {...propsCalendar} />
        <div className="cleaner" />
      </section>

      <section className="col-sm-5">
        <EventMonthList {...propsList} />
      </section>

      <div className="cleaner" />
    </div>);
  }
};
