import Component from '../component.react';
import React from 'react';
import List from './list.react';

export default class Browser extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    draw: React.PropTypes.func.isRequired,
    items: React.PropTypes.any.isRequired
  }

  render() {
    const {draw, items} = this.props;

    return (
      <div className="ui-browser">
        <div className="ui-browser-header"></div>
        <div className="ui-browser-filter"></div>
        <div className="ui-browser-pagi ui-browser-pagi-top"></div>
        <List {...{draw, items}} />
        <div className="ui-browser-pagi ui-browser-pagi-top"></div>
      </div>
    );
  }
};
