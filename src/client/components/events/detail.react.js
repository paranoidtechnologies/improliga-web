import React from 'react';
import Component from '../component.react';
import EventTime from './time.react';

export default class eventDetail extends Component {
  static propTypes = {
    event: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
  }

  render() {
    const {event, msg} = this.props;
    const time = {
      end: event.end,
      endTime: event.endTime,
      msg: msg,
      start: event.start,
      startTime: event.startTime
    };

    return (<div className="event-detail">
      <section className="container">
        <h1>{event.name}</h1>

        <div className="col-md-6 event-desc">
          <EventTime {...{time}} />
          <div className="event-info">
            <div className="event-info-item event-info-location">
              <div className="label">{msg.location}</div>
              <div className="value">{event.location}</div>
            </div>
          </div>

          <div className="desc-short">{event.descShort}</div>
          <div className="desc-full">{event.descFull}</div>
        </div>
      </section>
    </div>);
  }
}
