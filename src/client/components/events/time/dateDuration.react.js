import React from 'react';
import Component from '../../component.react';

export default class LayoutDateDuration extends Component {
  static propTypes = {
    end: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    start: React.PropTypes.object.isRequired
  }

  render() {
    const {end, msg, start} = this.props;
    const format = msg.app.format.date.exact;

    return (<div className="event-duration">
      <div className="event-start">
        <span className="event-start-date">{start.format(format)}</span>
      </div>
      <div className="event-end">
        <span className="event-end-date">{end.format(format)}</span>
      </div>
    </div>);
  }
}
