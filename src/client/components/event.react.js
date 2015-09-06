import Component from './component.react';
import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import Thumb from './thumb.react';
import './event.styl';

export default class Event extends Component {
  state = {};

  render() {
    const {id, name, start, image} = this.props;

    var time_start = moment(start);

    return (<Link to="show" params={{showId: id}} className="ui-event">
      <div className="ui-event-image">
        <Thumb height="75" src={image.url} width="75" />
      </div>

      <div className="ui-event-info">
        <div className="ui-event-title">{name}</div>
        <div className="ui-event-desc">
          <div class="location"></div>
          <div class="time">{time_start.format('D. M. YYYY')}</div>
        </div>
      </div>
    </Link>);
  }
};
