import React from 'react';
import Component from '../../component.react';

export default class LayoutDateTimeDuration extends Component {
  static propTypes = {
    end: React.PropTypes.object.isRequired,
    endTime: React.PropTypes.object.isRequired,
    formatDate: React.PropTypes.string.isRequired,
    formatTime: React.PropTypes.string.isRequired,
    msg: React.PropTypes.object.isRequired,
    start: React.PropTypes.object.isRequired,
    startTime: React.PropTypes.object.isRequired,
  }

  render() {
    const {end, endTime, formatDate, formatTime, msg, start, startTime} = this.props;

    return (<div className="event-duration">
      <div className="event-start">
        <span className="event-start-date">{start.format(formatDate)}</span>
        <span className="event-start-time">{startTime.format(formatTime)}</span>
      </div>
      <div className="event-duration-separator">-</div>
      <div className="event-end">
        <span className="event-end-date">{end.format(formatDate)}</span>
        <span className="event-end-time">{endTime.format(formatTime)}</span>
      </div>
    </div>);
  }
}
