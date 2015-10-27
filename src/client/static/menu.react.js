import Component from 'react-pure-render/component';
import './menu.styl';
import React, {PropTypes} from 'react';
import Link from './link.react';

export default class Menu extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    msg: PropTypes.object.isRequired
  }

  render() {
    const {lang, msg} = this.props;

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
              <Link className="menu-logo" lang={lang} to="home">
                  <span className="logo-label">{msg.home}</span>
                  <span className="logo-image"></span>
              </Link>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="siteNav">
              <ul className="nav navbar-nav site-menu-inner">
                <li><Link lang={lang} to="about">{msg.about}</Link></li>
                <li><Link lang={lang} to="shows">{msg.shows}</Link></li>
                <li><Link lang={lang} to="teams">{msg.teams}</Link></li>
                <li><Link lang={lang} to="workshops">{msg.workshops}</Link></li>
                <li><Link lang={lang} to="blog">{msg.blog}</Link></li>
                <li><Link lang={lang} to="contact">{msg.contacts}</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}
