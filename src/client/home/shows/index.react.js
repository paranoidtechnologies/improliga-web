import Browser from '../../components/browser';
import Event from '../../components/event.react';
import React from 'react';
import Rx from 'rx';
import ReactAsync from 'react-async';


export default class Shows extends Browser {
  static mixins = [ReactAsync.Mixin];

  getInitialStateAsync(next) {
    console.log('asdf');
    return props.actions.loadEvents();
  }


  static defaultProps = {
    draw: Event
  };

}
