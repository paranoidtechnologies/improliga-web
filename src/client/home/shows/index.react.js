import Browser from '../../components/browser';
import Event from '../../components/event.react';
import React from 'react';
import Rx from 'rx';
import ReactAsync from 'react-async';


export default class Shows extends Browser {
  static mixins = [ReactAsync.Mixin];

  componentDidMount(next) {
    return this.props.actions.loadEvents();
  }

  static defaultProps = {
    draw: Event
  };

}
