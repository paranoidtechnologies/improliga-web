import Component from '../component.react';
import React from 'react';
import Item from './list/item.react';
import List from './list.react';

export default class Browser extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    desc: React.PropTypes.string,
    draw: React.PropTypes.func.isRequired,
    header: React.PropTypes.object,
    items: React.PropTypes.any.isRequired
  }

  render() {
    const {draw, header, items, msg} = this.props;

    var head;

    if (header) {
      var headProps = {
        msg: msg
      };

      head = <Item draw={header} item={headProps} />;
    }

    return (
      <div className="ui-browser">
        {head}
        <div className="ui-browser-filter"></div>
        <div className="ui-browser-pagi ui-browser-pagi-top"></div>
        <List {...{draw, items}} />
        <div className="ui-browser-pagi ui-browser-pagi-top"></div>
      </div>
    );
  }
};
