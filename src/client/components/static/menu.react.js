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
      <nav className="navbar site-menu">
        <div className="container-fluid">
          <div className="navbar-inverse">
            <button className="navbar-toggle" data-target="#siteNav" data-toggle="collapse" type="button">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="navbar-brand">
              <Link className="menu-logo" to="home">
                  <span className="logo-label">{msg.home}</span>
                  <span className="logo-image"></span>
              </Link>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="siteNav">
              <ul className="nav navbar-nav site-menu-inner">
                <li><Link to="about">{msg.about}</Link></li>
                <li><Link to="shows">{msg.shows}</Link></li>
                <li><Link to="teams">{msg.teams}</Link></li>
                <li><Link to="workshops">{msg.workshops}</Link></li>
                <li><Link to="blog">{msg.blog}</Link></li>
                <li><Link to="contact">{msg.contacts}</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}
