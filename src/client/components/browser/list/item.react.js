import Component from '../../component.react';
import {Record} from 'immutable';
import React from 'react';

export default class Item extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    item: React.PropTypes.object,
    msg: React.PropTypes.object,
  }

  render() {
    this.props.item.msg = this.props.msg;

    return React.createElement(this.props.draw, this.props.item);
  }
};
