import Browser from '../browser.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import NewsItem from './item.react';

export default class NewsList extends Browser {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    msg: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    draw: NewsItem
  }

  componentDidMount(next) {
    console.log(this.props.items);
    return this.props.actions.news.loadNews();
  }
}
