import Component from '../../component.react';
import React from 'react';

export default class Item extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    item: React.PropTypes.object
  }

  render() {
    return React.createElement(this.props.draw, this.props.item);
  }
};
