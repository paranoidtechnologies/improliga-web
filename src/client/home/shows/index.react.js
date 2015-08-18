import Browser from '../../components/browser.react';
import Event from '../../components/event.react';
import React from 'react';
import {Link} from 'react-router';

export default class Shows extends Browser {
  static defaultProps = {
    draw: Event
  };
}
