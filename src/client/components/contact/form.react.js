import React from 'react';
import Component from '../component.react';
import InputEmail from '../form/input/email';
import InputHidden from '../form/input/hidden';
import InputTextarea from '../form/input/textarea';
import './form.styl';

export default class ContactForm extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
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
    this.setState({subject:item});
  }

  send(e) {
    if (this.validate()) {
      console.log('sending');
    } else {
      this.validateVisual();
    }

    e.preventDefault();
    e.stopPropagation();
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

  }

  render() {
    const {msg} = this.props;
    const state = this.state;
    const self = this;

    const cnameForm = 'ui-form form-cont' + (state.subject ? '' : ' hidden');
    const cnameOpts = 'form-options' + (state.subject ? ' hidden' : '');

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

        <form className={cnameForm} onSubmit={(e) => { this.send(e); }} noValidate>
          <fieldset className="ui-form-inputs">
            <InputHidden defaultValue={state.subject} name="subject" ref="subject" required={true} />
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
