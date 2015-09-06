import Component from './component.react';
import React from 'react';
import {Link} from 'react-router';

export default class Event extends Component {
  state = {};

  render() {
    const {name} = this.props;

    return (<div className="ui-event">
      <div className="ui-event-info">
        <div className="ui-event-title">{name}</div>
        <div className="ui-event-desc"></div>
      </div>

      <div className="ui-event-image"></div>
    </div>);
  }
};
