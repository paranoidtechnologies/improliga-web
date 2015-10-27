import Component from 'react-pure-render/component';
import React from 'react';
import timeLayouts from './timeLayouts';
import './time.styl';

export default class eventTime extends Component {
  static propTypes = {
    end: React.PropTypes.object,
    endTime: React.PropTypes.object,
    formatDate: React.PropTypes.string,
    formatTime: React.PropTypes.string,
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

            if (start.isSame(end, 'day')) {
              layout = 'dateTimeTimeDuration';
            }
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
    return (<div className="event-info-item event-info-label event-time">{this.renderLayout()}</div>);
  }
}
