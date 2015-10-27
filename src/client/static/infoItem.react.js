import Component from 'react-pure-render/component';
import React from 'react';

export default class InfoItem extends Component {
  static propTypes = {
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    value: React.PropTypes.any,
  }

  render() {
    const {label, type, value} = this.props;
    let val = value;

    if (value === null || typeof value === 'undefined') {
      return null;
    }

    if (type === 'link') {
      val = <a href={val}>{val}</a>;
    }

    if (type === 'link-email') {
      val = <a href={'mailto:' + val}>{val}</a>;
    }

    return (
      <div className="info-item">
        <span className="item-label">{label}</span>
        <span className="item-value">{val}</span>
      </div>
    );
  }
};
