import Component from '../../components/component.react';
import React from 'react';
import './logo.styl';

export default class Logo extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    var msg = this.props.msg;

    return (
      <div className="ui-ripple site-logo">
        <div className="ripple site-logo-ripple" />
        <div className="ripple-hover site-logo-ripple-hover" />
        <div className="site-logo-icon" />
        <div className="site-logo-text">
          <h1 className="site-logo-name-title">{msg.site.title}</h1>
          <div className="site-logo-name-desc">{msg.site.desc}</div>
        </div>
      </div>
    );
  }
};
