import Component from '../../components/component.react';
import React from 'react';

export default class ShowsHead extends Component {
  static propTypes = {
    msg: React.PropTypes.object.required
  }

  render() {
    return (
      <div className="row shows-heading">
      </div>
    );
  }
}
