import Component from '../component.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';

export default class NewsItem extends Component {
  render() {
    const {name, text} = this.props;

    return (
      <div className="ui-news-item">
        <h3>{name}</h3>

        <div className="content">
          {text}
        </div>
      </div>
    );
  }
}
