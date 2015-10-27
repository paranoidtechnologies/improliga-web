import Component from 'react-pure-render/component';
import React from 'react';
import {Link} from 'react-router';
import Logo from './logo.react';
import './header.styl';

export default class Header extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const msg = this.props.msg;

    return (
      <div className="ui-section site-header">
        <div className="ui-section-inner-wrapper">
          <div className="ui-site-intro">
            <Link title={msg.what} to="about" />
            <Logo msg={msg} />
          </div>
        </div>
      </div>
    );
  }
};
