import Component from '../../component.react';
import React from 'react';

export default class Item extends Component {
  static propTypes = {
    draw: React.PropTypes.func.isRequired,
    item: React.PropTypes.object
  }

  render() {
    var comp = React.createElement(this.props.draw, this.props.item);
    return (<div className="ui-browser-list-item">{comp}</div>);
  }
};
