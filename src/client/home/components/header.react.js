import Component from '../../components/component.react';
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
          <Link title={msg.what} to="o-improlize" />
          <Logo msg={msg} />
        </div>
      </div>
    );
  }
};
