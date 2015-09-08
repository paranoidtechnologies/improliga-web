import Component from '../component.react';
import './menu.styl';
import React from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const msg = this.props.msg;

    return (
      <div className="site-menu">
        <div className="site-menu-center">
          <ul className="site-menu-inner">
            <li><Link to="home">{msg.home}</Link></li>
            <li><Link to="about">{msg.about}</Link></li>
            <li><Link to="shows">{msg.shows}</Link></li>
            <li><Link to="teams">{msg.teams}</Link></li>
            <li><Link to="workshops">{msg.workshops}</Link></li>
            <li><Link to="news">{msg.news}</Link></li>
            <li><Link to="contact">{msg.contacts}</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
