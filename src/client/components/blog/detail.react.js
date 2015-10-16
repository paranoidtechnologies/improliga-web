import React from 'react';
import Component from '../component.react';

export default class BlogDetail extends Component {
  static propTypes = {
    blogItem: React.PropTypes.object.isRequired,
    formatDateTime: React.PropTypes.string,
    msg: React.PropTypes.object.isRequired,
  }

  render() {
    const {blogItem, formatDateTime, msg} = this.props;
    const {createdAt, name, text} = blogItem;

    return (<div className="blog-detail">
      <section className="container">
        <h1 className="text-center blog-heading">{name}</h1>

        <div className="blog-cont">
          {text}
        </div>

        <div className="blog-footer">
          <div className="created-at">
            <span className="label">{msg.createdAt}</span>
            <span className="value">{createdAt.format(formatDateTime)}</span>
          </div>
        </div>
      </section>
    </div>);
  }
}
