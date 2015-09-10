import React from 'react';
import Component from '../../components/component.react';
import ContactForm from '../contact/form';
import './contact.styl';

export default class Contact extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="ui-section structure-el-parallax ui-section-contact">
        <div className="ui-section-inner-wrapper">
          <ContactForm {...this.props} />
        </div>
      </div>
    );
  }
};

