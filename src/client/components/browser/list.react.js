import Component from '../component.react';
import React from 'react';
import Item from './list/item.react';

export default class List extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired
  }

  state = {
  }

  render() {
    const draw = this.props.draw;
    const items = this.props.items;

    return (
      <div className="ui-browser-list">
        <div className="ui-list-items">
          {items.map(function(item, key) {
            return <Item draw={draw} item={items} key={key} />
          })}
        </div>
      </div>
    );
  }
};
