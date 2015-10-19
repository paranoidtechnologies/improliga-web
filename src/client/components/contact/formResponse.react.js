import React from 'react';
import Component from '../component.react';

export default class ContactFormFesponse extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    response: React.PropTypes.object.isRequired,
  }


  render() {
    const {msg, response} = this.props;
    const result = response.get('result');
    const error = response.get('error');

    let cname = ['form-response'];
    let message = null;

    if (result === null || typeof result === 'undefined') {
      cname.push('response-null');
    } else if (result) {
      cname.push('response-success');
      message = msg.success;
    } else {
      cname.push('response-error');

      if (error && msg[error]) {
        message = msg[error];
      } else {
        message = msg.unknownError;
      }
    }

    return (
      <div className={cname.join(' ')}>
        {result === null ? null : <div className="response-message">{message}</div>}
      </div>
    );
  }
}
