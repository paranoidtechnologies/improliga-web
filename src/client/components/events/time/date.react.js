import React from 'react';
import Component from '../../component.react';

export default class LayoutDate extends Component {
  static propTypes = {
    formatDate: React.PropTypes.string.isRequired,
    start: React.PropTypes.object.isRequired
  }

  render() {
    const {formatDate, start} = this.props;

    return (<div className="event-duration">
      <div className="event-start">
        <span className="start-date">{start.format(formatDate)}</span>
      </div>
    </div>);
  }
}
