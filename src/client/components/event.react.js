import Component from './component.react';
import React from 'react';
import {Link} from 'react-router';

export default class Event extends Component {
  state = {};

  render() {
    <div class="ui-event">
      <div class="ui-event-info">
        <div class="ui-event-title">{this.state.name}</div>
        <div class="ui-event-desc"></div>
      </div>

      <div class="ui-event-image"></div>
    </div>
  }
};
