import Component from 'react-pure-render/component';
import React from 'react';

export default class LayoutDateTimeDuration extends Component {
  static propTypes = {
    end: React.PropTypes.object.isRequired,
    endTime: React.PropTypes.object.isRequired,
    formatDate: React.PropTypes.string.isRequired,
    formatTime: React.PropTypes.string.isRequired,
    start: React.PropTypes.object.isRequired,
    startTime: React.PropTypes.object.isRequired,
  }

  render() {
    const {end, endTime, formatDate, formatTime, start, startTime} = this.props;

    return (<div className="event-duration">
      <div className="event-start">
        <span className="start-date">{start.format(formatDate)}</span>
        <span className="start-time">{startTime.format(formatTime)}</span>
      </div>
      <div className="event-duration-separator">-</div>
      <div className="event-end">
        <span className="end-date">{end.format(formatDate)}</span>
        <span className="end-time">{endTime.format(formatTime)}</span>
      </div>
    </div>);
  }
}
