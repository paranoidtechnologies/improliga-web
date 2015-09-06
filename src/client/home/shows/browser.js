import Browser from '../../components/browser';
import Event from '../../components/event.react';
import React from 'react';

export default class ShowsBrowser extends Browser {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.array.isRequired
  }

  componentDidMount(next) {
    return this.props.actions.loadEvents();
  }

  static defaultProps = {
    draw: Event
  };

}
