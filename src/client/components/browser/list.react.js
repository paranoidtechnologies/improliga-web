import Component from '../component.react';
import React from 'react';
import Item from './list/item.react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class List extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ])
  }

  state = {
    items: []
  }

  render() {
    const {draw, items} = this.props;

    return (
      <div className="ui-browser-list">
        <div className="ui-list-items">
          {items.map(function(item, key) {
            return <Item {...{draw, item, items, key}} />
          })}
        </div>
      </div>
    );
  }
};
