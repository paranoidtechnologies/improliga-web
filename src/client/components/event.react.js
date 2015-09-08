import Component from './component.react';
import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import Thumb from './thumb.react';
import './event.styl';

export default class Event extends Component {
  static propTypes = {
    thumbHeight: React.PropTypes.number,
    thumbWidth: React.PropTypes.number
  };

  static defaultProps = {
    thumbHeight: 75,
    thumbWidth: 75
  };


  state = {};

  render() {
    const {id, name, start, image, thumbHeight, thumbWidth} = this.props;

    var time_start = moment(start);

    return (<Link to="show" params={{showId: id}} className="ui-event">
      <div className="ui-event-image">
        <Thumb height={thumbHeight} src={image.url} width={thumbWidth} />
      </div>

      <div className="ui-event-info">
        <div className="ui-event-title">{name}</div>
        <div className="ui-event-desc">
          <div className="location"></div>
          <div className="time">{time_start.format('D. M. YYYY')}</div>
        </div>
      </div>
    </Link>);
  }
};
