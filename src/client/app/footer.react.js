import React from 'react';
import Component from 'react-pure-render/component';
import Link from '../static/link.react';

export default class Footer extends Component {
  static propTypes = {
    lang: React.PropTypes.string.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {lang, msg} = this.props;

    return (
      <footer className="ui-container ui-contact-static">
        <div className="text-center">
          <strong>{msg.contact.name}</strong>

          <div className="desc">
            <address>{msg.contact.addr}</address>
            <a href={msg.contact.mail}>{msg.contact.mail}</a>&nbsp;|&nbsp;
            <Link lang={lang} to="contact">Kontakty</Link>
          </div>
        </div>
      </footer>
    );
  }
}
