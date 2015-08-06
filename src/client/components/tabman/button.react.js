import Component from '../component.react';
import React from 'react';

export default class Button extends Component {
  static props = {};

  static propTypes = {
    activate: React.PropTypes.any,
    active: React.PropTypes.bool,
    msg: React.PropTypes.string
  }

  handleSelect(e) {
    if (this.props.activate instanceof Function) {
      this.props.activate.call(this, e, this);
    }
  }

  render() {
    var cname = ['ui-tabman-button'];

    if (this.props.active) {
      cname.push('active');
    }

    return (
      <div className={cname.join(' ')} onClick={this.handleSelect.bind(this)} onTouchEnd={this.handleSelect.bind(this)}>{this.props.msg}</div>
    );
  }
};
