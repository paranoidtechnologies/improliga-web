import Browser from '../browser/browser.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import TeamListItem from './item.react';

export default class TeamList extends Browser {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    draw: TeamListItem
  }
}
