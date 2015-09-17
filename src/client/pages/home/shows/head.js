import Component from '../../../components/component.react';
import React from 'react';

export default class ShowsHead {
  static propTypes = {
    msg: React.PropTypes.object.required
  }

  render() {
    const {msg} = this.props;

    return (
      <div className="shows-heading">
        <h2>{msg.title}</h2>
      </div>
    );
  }
}
