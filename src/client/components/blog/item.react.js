import Component from '../component.react';
import React from 'react';
import {Link} from 'react-router';

export default class BlogItem extends Component {
  static propTypes = {
    createdAt: React.PropTypes.object,
    id: React.PropTypes.number.isRequired,
    msg: React.PropTypes.object.isRequired,
    name: React.PropTypes.string,
    text: React.PropTypes.string
  };

  render() {
    const {id, createdAt, msg, name, text} = this.props;

    return (
      <div className="ui-blog-item">
        <h3>
          <Link params={{blogItemId: id}} to="blogDetail">{name}</Link>
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
