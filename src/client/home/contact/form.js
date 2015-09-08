import React from 'react';
import InputEmail from '../../components/form/input/email';

export default class ContactForm {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    subject: React.PropTypes.string
  }

  static subjects = [
    'novice',
    'invite',
    'cili',
    'team',
    'support',
    'generic'
  ];

  render() {
    const {msg} = this.props;

    return (
      <div className="ui-contact-form">
        <div className="ui-contact-form-header">
          <h2>{msg.title}</h2>

          <div className="desc">
            <p>{msg.desc}</p>
          </div>
        </div>

        <form>
          <InputEmail label={msg.email} name="email" />
        </form>
      </div>
    );
  }
}
