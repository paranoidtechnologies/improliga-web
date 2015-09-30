import Component from '../../components/component.react';
import React from 'react';
import {Link} from 'react-router';

export default class ShowsHead {
  static propTypes = {
    msg: React.PropTypes.object.required
  }

  render() {
    const {msg} = this.props;

    return (
      <div className="row shows-heading">
      </div>
    );
  }
}
