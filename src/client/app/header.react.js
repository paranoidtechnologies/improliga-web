import Component from 'react-pure-render/component';
import Menu from '../static/menu.react';
import React, {PropTypes} from 'react';

export default class Header extends Component {

  static propTypes = {
    lang: PropTypes.string.isRequired,
    msg: PropTypes.object.isRequired,
    viewer: PropTypes.object
  }

  render() {
    const {lang, msg} = this.props;

    return (
      <header>
        <Menu lang={lang} msg={msg.menu} />
      </header>
    );
  }

}
