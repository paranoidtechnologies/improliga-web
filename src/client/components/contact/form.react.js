import React from 'react';
import Component from '../component.react';
import ContactFormResponse from './formResponse.react';
import InputEmail from '../form/input/email';
import InputHidden from '../form/input/hidden';
import InputTextarea from '../form/input/textarea';
import './form.styl';

export default class ContactForm extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    response: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
    subject: React.PropTypes.string,
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
    invalid: [],
    subject:null
  };

  getInputs() {
    const names = ['email', 'message', 'subject'];
    let inputs = {};

    for (let i = 0; i < names.length; i++) {
      inputs[names[i]] = this.refs[names[i]];
    }

    return inputs;
  }

  getData() {
    const inputs = this.getInputs();
    let data = {};

    for (let name in inputs) {
      data[name] = inputs[name].val();
    }

    return data;
  }

  select(e, item) {
    const {actions} = this.props
    actions.setSubject(item);
  }

  send(e) {
    e.preventDefault();

    if (this.validate()) {
      const data = this.getData();
      this.props.actions.sendContactForm(data);
    } else {
      this.validateVisual();
    }
  }

  validate() {
    const inputs = this.getInputs();
    let invalid = [];

    for (let name in inputs) {
      let inputValid = inputs[name].isValid();

      if (!inputValid) {
        invalid.push(name);
      }
    }

    this.state.invalid = invalid;
    return invalid.length === 0;
  }

  validateVisual() {
    const inputs = this.getInputs();

    for (let name in inputs) {
      inputs[name].validateVisual();
    }
  }

  render() {
    const {msg, response, subject} = this.props;
    const self = this;

    const cnameForm = 'ui-form form-cont' + (subject ? '' : ' hidden');
    const cnameOpts = 'form-options' + (subject ? ' hidden' : '');

    return (
      <div className="ui-contact-form">
        <div className="ui-contact-form-header">
          <h2 className="text-center">{msg.title}</h2>

          <div className="text-center form-desc">
            <p>{msg.desc}</p>
          </div>
        </div>

        <div className={cnameOpts}>
          {this.subjects.map(function(item, key) {
            return (
              <div className="col-xs-6 ui-button form-opt" key={key} onClick={(e) => { self.select(e, item); }}>
                <span className="label item-label">{msg.subjects[item]}</span>
              </div>
            );
          })}
        </div>

        {response.get('result') === null ? null : <ContactFormResponse msg={msg.response} response={response} />}

        <form className={cnameForm} onSubmit={(e) => { this.send(e); }} noValidate>
          <fieldset className="ui-form-inputs">
            <InputHidden defaultValue={subject} name="subject" ref="subject" required={true} />
            <InputEmail label={msg.email} name="email" noValidate ref="email" required={true} />
            <InputTextarea label={msg.message} name="message" ref="message" required={true} />
          </fieldset>

          <div className="ui-form-buttons">
            <button className="form-submit" type="submit">{msg.send}</button>
            <button className="form-cancel" onClick={(e) => { this.select(e, null); }} type="button">{msg.cancel}</button>
          </div>
        </form>
      </div>
    );
  }
}
