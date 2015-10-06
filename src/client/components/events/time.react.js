import React from 'react';
import Component from '../component.react';
import timeLayouts from './timeLayouts';

export default class eventTime extends Component {
  static propTypes = {
    end: React.PropTypes.object,
    endTime: React.PropTypes.object,
    msg: React.PropTypes.object,
    start: React.PropTypes.object,
    startTime: React.PropTypes.object
  }

  /* Layouts
   *
   * null
   * start date
   * start date, start time
   * start date, end date
   * start date, start time, end date
   * start date, start time, end date, end time
   */
  getLayout() {
    const {start, startTime, end, endTime} = this.props;
    let layout = null;

    if (start) {
      layout = 'date';

      if (startTime) {
        layout = 'time';

        if (end) {
          layout = 'dateTimeDateDuration';

          if (endTime) {
            layout = 'dateTimeDuration';
          }
        }
      } else if (end) {
        layout = 'dateDuration';
      }
    }

    return layout;
  }

  renderLayout() {
    const layoutName = this.getLayout();

    if (layoutName && timeLayouts[layoutName]) {
      return React.createElement(timeLayouts[layoutName], this.props);
    }

    return null;
  }

  render() {
    return (<div className="event-info-item event-time">{this.renderLayout()}</div>);
  }
}
