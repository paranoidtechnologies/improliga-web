import React from 'react';
import Component from '../../component.react';

export default class LayoutTime extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    formatDate: React.PropTypes.string,
    formatTime: React.PropTypes.string,
    start: React.PropTypes.object.isRequired,
    startTime: React.PropTypes.object.isRequired
  }

  render() {
    const {formatDate, formatTime, start, startTime} = this.props;

    return (<div className="event-duration">
      <div className="event-start">
        <span className="start-date">{start.format(formatDate)}</span>
        <span className="start-time">{startTime.format(formatTime)}</span>
      </div>
    </div>);
  }
}
