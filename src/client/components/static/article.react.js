import Component from '../component.react';
import React from 'react';

export default class Article extends Component {
  static propTypes = {
    content: React.PropTypes.array.isRequired,
    heading: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="ui-static-article">
        <h2>{this.props.heading}</h2>

        <div className="ui-static-article-content">
          {this.props.content.map(function(p, key) {
            return <p key={key}>{p}</p>;
          })}
        </div>
      </div>
    );
  }
};
