import Component from './component.react';
import React from 'react';
import List from './browser/list.react';

export default class Browser extends Component {
  static propTypes = {
    draw: React.PropTypes.object.isRequired
  }

  state = {
  }

  getItems() {
    return [];
  }

  render() {
    return (
      <div className="ui-browser">
        <div className="ui-browser-header"></div>
        <div className="ui-browser-filter"></div>
        <div className="ui-browser-pagi ui-browser-pagi-top"></div>
        <List draw={this.props.draw} items={this.getItems()} />
        <div className="ui-browser-pagi ui-browser-pagi-top"></div>
      </div>
    );
  }
};
