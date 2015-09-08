import React from 'react';
import Component from '../../components/component.react';
import InputEmail from '../../components/form/input/email';
import InputHidden from '../../components/form/input/hidden';
import InputTextarea from '../../components/form/input/textarea';

export default class ContactForm extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    subject: React.PropTypes.string
  }

  subjects = [
    'novice',
    'invite',
    'cili',
    'team',
    'support',
    'generic'
  ];

  state = {
    subject:null
  };

  select(e, item) {
    console.log(item);
    this.setState({subject:item});
  }

  render() {
    const {msg} = this.props;
    const state = this.state;
    const obj = this;

    return (
      <div className="ui-contact-form">
        <div className="ui-contact-form-header">
          <h2>{msg.title}</h2>

          <div className="desc">
            <p>{msg.desc}</p>
          </div>
        </div>

        <div className="ui-contact-form-options">
          {this.subjects.map(function(item) {
            return (
              <div className="ui-contact-form-item" onClick={(e) => {obj.select(e, item)}}>
                <span className="label">{msg.subject[item]}</span>
              </div>
            );
          })}
        </div>

        <form>
          <fieldset>
            <InputHidden name="subject" defaultValue={state.subject} />
            <InputEmail label={msg.email} name="email" />
            <InputTextarea label={msg.message} name="message" />
          </fieldset>

          <div className="ui-contact-form-buttons">
            <button type="submit">{msg.form.send}</button>
            <button type="submit">{msg.form.cancel}</button>
          </div>
        </form>
      </div>
    );
  }
}
