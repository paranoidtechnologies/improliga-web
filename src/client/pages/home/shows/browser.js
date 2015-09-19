import Browser from '../../../components/browser';
import Event from '../../../components/event.react';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ShowsHead from './head';

export default class ShowsBrowser extends Browser {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ])
  }

  componentDidMount(next) {
    return this.props.actions.loadEvents();
  }

  static defaultProps = {
    draw: Event
  };

}
