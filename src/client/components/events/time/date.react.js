import React from 'react';
import Component from '../../component.react';

export default class LayoutDate extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    start: React.PropTypes.object.isRequired
  }

  render() {
    const {msg, start} = this.props;
    const format = msg.app.format.date.exact;

    return (<div className="event-start-time">
      <span className="event-start-date">{start.format(format)}</span>
    </div>);
  }
}
