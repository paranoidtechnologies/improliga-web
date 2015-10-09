import React from 'react';
import Component from '../../component.react';

export default class LayoutDateDuration extends Component {
  static propTypes = {
    end: React.PropTypes.object.isRequired,
    formatDate: React.PropTypes.string.isRequired,
    start: React.PropTypes.object.isRequired
  }

  render() {
    const {end, formatDate, start} = this.props;

    return (<div className="event-duration">
      <div className="event-start">
        <span className="start-date">{start.format(formatDate)}</span>
      </div>
      <div className="event-duration-separator">-</div>
      <div className="event-end">
        <span className="end-date">{end.format(formatDate)}</span>
      </div>
    </div>);
  }
}
