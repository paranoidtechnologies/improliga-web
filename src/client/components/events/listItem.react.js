import Component from '../component.react';
import React from 'react';
import {Link} from 'react-router';
import Thumb from '../thumb.react';
import EventTime from './time.react';
import './listItem.styl';

export default class EventListItem extends Component {
  static propTypes = {
    end: React.PropTypes.object,
    endTime: React.PropTypes.object,
    formatDate: React.PropTypes.string,
    formatTime: React.PropTypes.string,
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    location: React.PropTypes.object,
    name: React.PropTypes.string,
    start: React.PropTypes.object,
    startTime: React.PropTypes.object,
    thumbHeight: React.PropTypes.number,
    thumbWidth: React.PropTypes.number
  };

  static defaultProps = {
    thumbHeight: 75,
    thumbWidth: 75
  };


  state = {};

  render() {
    const {id, name, image, thumbHeight, thumbWidth} = this.props;

    return (<Link className="ui-event" params={{showId: id}} to="show">
      <div className="col-xs-2 ui-event-image">
        {image ? <Thumb height={thumbHeight} src={image.url} width={thumbWidth} /> : null}
      </div>

      <div className="col-xs-10 ui-event-info">
        <div className="ui-event-title">{name}</div>
        <div className="ui-event-desc">
          <EventTime {...this.props} />
        </div>
      </div>
      <div className="ui-event-cleaner" />
    </Link>);
  }
};
