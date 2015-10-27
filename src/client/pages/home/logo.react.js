import Component from 'react-pure-render/component';
import React from 'react';
import {Link} from 'react-router';
import './logo.styl';

export default class Logo extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    var msg = this.props.msg;

    return (
      <Link className="ui-ripple site-logo" to="shows">
        <div className="ripple site-logo-ripple" />
        <div className="ripple-hover site-logo-ripple-hover" />
        <div className="site-logo-icon" />
        <div className="site-logo-text">
          <h1 className="site-logo-name-title">{msg.site.title}</h1>
          <div className="site-logo-name-desc">{msg.site.desc}</div>
        </div>
      </Link>
    );
  }
};
