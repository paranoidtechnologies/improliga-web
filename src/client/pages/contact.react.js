import React from 'react';
import Component from '../components/component.react';
import ContactForm from '../components/contact/form.react';
import './contact.styl';

export default class Contact extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {actions, msg} = this.props;
    const msgContact = msg.pages.contact;
    const propsForm = {
      actions: actions,
      msg: msg.pages.contact.form,
      subjects: msg.pages.contact.subjects
    };

    return (
      <div className="ui-page ui-page-contact">
        <section className="container ui-section-heads">
          <div className="text-center">
            <h1>{msgContact.club.title}</h1>

            <address>
              <strong>Česká improvizační liga o. s.</strong><br />
              Přemyšlenská 1102<br />
              182 00 Praha 8<br />

              <abbr title={msgContact.club.icoFull}>{msgContact.club.ico}:</abbr> 26636123
            </address>
          </div>
        </section>

        <section className="container ui-section-heads">
          <div className="text-center">
            <h2>{msgContact.heads.title}</h2>
            <p>{msgContact.heads.desc}</p>
          </div>

          <ul className="row list-unstyled">
            <li className="col-md-4 text-center">Vanda Gabrielová</li>
            <li className="col-md-4 text-center">Pavla Sedláčková</li>
            <li className="col-md-4 text-center">Pavel Žák</li>
          </ul>
        </section>

        <section className="container ui-section-contact">
          <ContactForm {...propsForm} />
        </section>
      </div>
    );
  }
};

