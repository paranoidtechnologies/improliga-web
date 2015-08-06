import Component from '../component.react';
import './menu.styl';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

export default class Menu extends Component {
  render() {
    const msg = this.props.msg;

    return (
      <div className="site-menu">
        <div className="site-menu-center">
          <ul className="site-menu-inner">
            <li><Link to="home">{msg.home}</Link></li>
            <li><Link to="o-improlize">{msg.about}</Link></li>
            <li><Link to="predstaveni">{msg.shows}</Link></li>
            <li><Link to="tymy">{msg.teams}</Link></li>
            <li><Link to="workshopy">{msg.workshops}</Link></li>
            <li><Link to="kontakty">{msg.contacts}</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
