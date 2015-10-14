import Component from '../component.react';
import React from 'react';
import {Link} from 'react-router';

export default class NewsItem extends Component {
  static propTypes = {
    createdAt: React.PropTypes.object,
    msg: React.PropTypes.object.isRequired,
    name: React.PropTypes.string,
    text: React.PropTypes.string
  };

  render() {
    const {id, msg, name, text, createdAt} = this.props;

    return (
      <div className="ui-news-item">
        <h3>
          <Link params={{newsItemId: id}} to="newsDetail">{name}</Link>
        </h3>

        <div className="content">
          {text}
        </div>

        <div className="footer">
          <span className="date">{createdAt.format(msg.app.format.date.exact)}</span>
        </div>
      </div>
    );
  }
}
