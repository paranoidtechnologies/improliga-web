import Browser from '../../components/browser.react';
import EventListItem from '../../components/events/listItem.react';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
    draw: EventListItem
  };

}
