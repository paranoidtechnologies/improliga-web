import Component from 'react-pure-render/component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';

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
            return React.CreateElement(draw, {...{item, msg, pass}, key: item.id});
          })}
        </div>
      </div>
    );
  }
};