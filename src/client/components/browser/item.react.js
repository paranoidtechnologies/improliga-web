import Component from '../component.react';
import React from 'react';

export default class Item extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    item: React.PropTypes.object,
    msg: React.PropTypes.object,
    pass: React.PropTypes.object,
  }

  render() {
    const {pass} = this.props;
    this.props.item.msg = this.props.msg;

    if (pass) {
      for (var key in pass) {
        this.props.item[key] = pass[key];
      }
    }

    return React.createElement(this.props.draw, this.props.item);
  }
};
