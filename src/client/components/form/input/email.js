import Input from '../input';
import React from 'react';
import validator from 'validator';

export default class InputEmail extends Input {
  static defaultProps = {
    tag: 'input',
    type: 'email'
  };

  isEmail() {
    return validator.isEmail(this.val());
  }

  validate() {
    return this.isEmpty() || this.isEmail();
  }
}
