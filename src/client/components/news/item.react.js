import Component from '../component.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import moment from 'moment';

export default class NewsItem extends Component {
  render() {
    const {msg, name, text, created_at} = this.props;
    const date = moment(created_at, msg.app.format.date.system);

    return (
      <div className="ui-news-item">
        <h3>{name}</h3>

        <div className="content">
          {text}
        </div>

        <div className="footer">
          <span className="date">{date.format(msg.app.format.date.exact)}</span>
        </div>
      </div>
    );
  }
}
