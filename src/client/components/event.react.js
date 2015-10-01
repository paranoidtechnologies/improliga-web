import Component from './component.react';
import React from 'react';
import {Link} from 'react-router';
import Thumb from './thumb.react';
import './event.styl';

export default class Event extends Component {
  static propTypes = {
    id: React.PropTypes.number,
    image: React.PropTypes.number,
    name: React.PropTypes.string,
    start: React.PropTypes.object.isRequired,
    thumbHeight: React.PropTypes.number,
    thumbWidth: React.PropTypes.number
  };

  static defaultProps = {
    thumbHeight: 75,
    thumbWidth: 75
  };


  state = {};

  render() {
    const {id, name, start, image, thumbHeight, thumbWidth} = this.props;

    return (<Link className="ui-event" params={{showId: id}} to="show">
      <div className="col-xs-2 ui-event-image">
        <Thumb height={thumbHeight} src={image.url} width={thumbWidth} />
      </div>

      <div className="col-xs-10 ui-event-info">
        <div className="ui-event-title">{name}</div>
        <div className="ui-event-desc">
          <div className="location"></div>
          {start ? <div className="time">{start.format('D. M. YYYY')}</div> : ''}
        </div>
      </div>
      <div className="ui-event-cleaner" />
    </Link>);
  }
};
