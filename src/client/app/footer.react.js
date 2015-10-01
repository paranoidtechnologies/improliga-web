import React from 'react';
import Component from '../components/component.react';

export default class Footer extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {msg} = this.props;

    return (
      <footer className="ui-container ui-contact-static">
        <div className="ui-contact-form-header">
          <strong>{msg.contact.name}</strong>

          <div className="desc">
            <address>{msg.contact.addr}</address>
            <a href={msg.contact.mail}>{msg.contact.mail}</a>
          </div>
        </div>
      </footer>
    );
  }
}
