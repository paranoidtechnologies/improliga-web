import Component from 'react-pure-render/component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import BlogItem from './item.react';

export default class BlogList extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {items, msg} = this.props;

    return (
      <div className="ui-browser-list">
        {items.map(function(item, key) {
          return <BlogItem {...{item, msg, pass}} key={item.id} />;
        })}
      </div>
    );
  }
}
