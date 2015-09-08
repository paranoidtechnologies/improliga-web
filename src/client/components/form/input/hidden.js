import Input from '../input';
import React from 'react';

export default class InputHidden extends Input {
  static defaultProps = {
    tag: 'input',
    type: 'hidden'
  };

}
