import Component from '../component.react';
import React from 'react';
import Item from './item.react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class List extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object,
    page: React.PropTypes.number.isRequired,
    pass: React.PropTypes.object,
  }

  static defaultProps = {
    items: [],
    page: 0
  }

  render() {
    const {draw, items, msg, pass} = this.props;

    return (
      <div className="ui-browser-list">
        <div className="ui-list-items">
          {items.map(function(item, key) {
            return <Item {...{draw, item, items, key, msg, pass}} />;
          })}
        </div>
      </div>
    );
  }
};
