import Component from 'react-pure-render/component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import TeamListItem from './item.react';

export default class TeamList extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {items, msg} = this.props;

    return (
      <div className="ui-browser-list">
        {items.map(function(item, key) {
          return <TeamListItem {...{item, msg}} key={item.id} />;
        })}
      </div>
    );
  }

}
