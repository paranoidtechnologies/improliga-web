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
    this.setState({subject:item});
  }

  send(e) {

  }

  render() {
    const {msg} = this.props;
    const state = this.state;
    const obj = this;
    const msgLoc = msg.pages.contact;


    const cnameForm = 'ui-form ui-contact-form-cont' + (state.subject ? '':' hidden');
    const cnameOpts = 'ui-contact-form-options' + (state.subject ? ' hidden':'');

    return (
      <div className="ui-contact-form">
        <div className="ui-contact-form-header">
          <h2 className="text-center">{msgLoc.form.title}</h2>

          <div className="desc">
            <p>{msgLoc.form.desc}</p>
          </div>
        </div>

        <div className={cnameOpts}>
          {this.subjects.map(function(item, key) {
            return (
              <div className="col-md-6 ui-contact-form-item" key={key} onClick={(e) => {obj.select(e, item)}}>
                <span className="label">{msgLoc.subject[item]}</span>
              </div>
            );
          })}
        </div>

        <form className={cnameForm} onSubmit={(e) => { this.send(e); }}>
          <fieldset className="ui-form-inputs">
            <InputHidden name="subject" defaultValue={state.subject} />
            <InputEmail label={msgLoc.email} name="email" />
            <InputTextarea label={msgLoc.message} name="message" />
          </fieldset>

          <div className="ui-form-buttons">
            <button type="submit">{msgLoc.form.send}</button>
            <button type="button" onClick={(e) => { this.select(e, null); }}>{msgLoc.form.cancel}</button>
          </div>
        </form>
      </div>
    );
  }
}
