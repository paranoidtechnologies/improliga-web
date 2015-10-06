import React from 'react';
import Component from '../../component.react';

export default class LayoutDateTimeDuration extends Component {
  static propTypes = {
    end: React.PropTypes.object.isRequired,
    endTime: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    start: React.PropTypes.object.isRequired,
    startTime: React.PropTypes.object.isRequired,
  }

  render() {
    const {end, msg, start, startTime} = this.props;
    const format = msg.app.format.date.exact;
    const formatTime = msg.app.format.dateTime.exact;

    return (<div className="event-duration-time">
      <div className="event-start">
        <span className="event-start-date">{start.format(format)}</span>
        <span className="event-start-time">{startTime.format(formatTime)}</span>
      </div>
      <div className="event-end">
        <span className="event-end-date">{end.format(format)}</span>
        <span className="event-end-time">{endTime.format(format)}</span>
      </div>
    </div>);
  }
}
