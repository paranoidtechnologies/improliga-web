import React from 'react';
import Component from '../../component.react';

export default class LayoutTime extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    start: React.PropTypes.object.isRequired,
    startTime: React.PropTypes.object.isRequired
  }

  render() {
    const {msg, start, startTime} = this.props;
    const format = msg.app.format.date.exact;
    const formatTime = msg.app.format.time.exact;

    return (<div className="event-start-time">
      <span className="start-date">{start.format(format)}</span>
      <span className="start-time">{startTime.format(formatTime)}</span>
    </div>);
  }
}
