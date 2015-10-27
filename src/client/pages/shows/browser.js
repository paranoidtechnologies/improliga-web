import Component from 'react-pure-render/component';
import EventListItem from '../../events/listItem.react';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class ShowsBrowser extends Component {
  static propTypes = {
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ])
  }

  render() {
    const {draw, items, msg, pass} = this.props;

    return (
      <div className="ui-browser-list">
        <div className="ui-list-items">
          {items.map(function(item, key) {
            return <EventListItem {...{item, msg, pass}} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}
