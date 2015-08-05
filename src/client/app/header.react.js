import Component from '../components/component.react';
import Menu from '../components/public/menu.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object
  }

  render() {
    const {msg:{components:{menu:menu}}} = this.props;

    return (
      <header>
        <h1>Hello</h1>
        <Menu msg={menu} />
      </header>
    );
  }

}
