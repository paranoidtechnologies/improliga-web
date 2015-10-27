import Browser from '../../browser/browser.react';
import EventListItem from '../../events/listItem.react';
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

  static defaultProps = {
    draw: EventListItem
  };

}
