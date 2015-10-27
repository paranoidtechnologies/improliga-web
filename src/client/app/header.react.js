import Component from 'react-pure-render/component';
import Menu from '../static/menu.react';
import React from 'react';

export default class Header extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object
  }

  render() {
    const {msg} = this.props;

    return (
      <header>
        <Menu msg={msg.menu} />
      </header>
    );
  }

}
