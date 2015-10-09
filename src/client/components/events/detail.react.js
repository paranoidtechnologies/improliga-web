import React from 'react';
import Component from '../component.react';
import Thumb from '../thumb.react';
import EventTime from './time.react';
import EventLocation from './location.react';
import EventPrice from './price.react';
import './detail.styl';

export default class eventDetail extends Component {
  static propTypes = {
    event: React.PropTypes.object.isRequired,
    formatDate: React.PropTypes.string,
    formatTime: React.PropTypes.string,
    msg: React.PropTypes.object.isRequired,
  }

  render() {
    const {event, formatDate, formatTime, msg} = this.props;
    const {image, location} = event;
    const time = {
      end: event.end,
      endTime: event.endTime,
      formatDate: formatDate,
      formatTime: formatTime,
      msg: msg,
      start: event.start,
      startTime: event.startTime
    };
    const price = {
      msg: msg.price,
      price: event.price,
      priceStudent: event.priceStudent,
    };

    return (<div className="event-detail">
      <section className="container">
        <h1>{event.name}</h1>

        <div className="col-sm-6 event-desc">
          <div className="text-xs-center text-sm-left event-details">
            <EventTime {...time} />
            {typeof location == 'object' ? <EventLocation {...location} />:null}
            {event.price || event.priceStudent ? <EventPrice {...price} />:null}
          </div>

          <div className="desc-short">{event.descShort}</div>
          <div className="desc-full">{event.descFull}</div>
        </div>

        <div className="col-sm-6 event-imagery">
          <div className="event-image">
            {image ? <Thumb height={640} src={image.url} width={640} /> : null}
          </div>
        </div>
      </section>
    </div>);
  }
}
