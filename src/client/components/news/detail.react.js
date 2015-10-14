import React from 'react';
import Component from '../component.react';

export default class NewsDetail extends Component {
  static propTypes = {
    formatDateTime: React.PropTypes.string,
    msg: React.PropTypes.object.isRequired,
    newsItem: React.PropTypes.object.isRequired,
  }

  render() {
    const {newsItem, formatDateTime, msg} = this.props;
    const {createdAt, name, text} = newsItem;

    return (<div className="news-detail">
      <section className="container">
        <h1 className="text-center news-heading">{name}</h1>

        <div className="news-cont">
          {text}
        </div>

        <div className="news-footer">
          <div className="created-at">
            <span className="label">{msg.createdAt}</span>
            <span className="value">{createdAt.format(formatDateTime)}</span>
          </div>
        </div>
      </section>
    </div>);
  }
}
