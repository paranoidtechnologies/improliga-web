import Component from '../components/component.react';
import Menu from '../components/static/menu.react';
import React from 'react';

export default class Header extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object
  }

  render() {
    const {msg:{components:{menu:menu}}} = this.props;

    return (
      <header>
        <Menu msg={menu} />
      </header>
    );
  }

}
