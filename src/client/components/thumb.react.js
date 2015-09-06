import Component from './component.react';
import React from 'react';

export default class Thumb extends Component {
  propTypes = {
    alt: React.PropTypes.string,
    height: React.PropTypes.number,
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number
  }

  defaultProps = {
    alt: 'thumb',
    height: 240,
    width: 320
  }

  render() {
    const {alt, height, src, width} = this.props;
    const dest = src + '?width=' + width + '&height=' + height;

    return (<div className="ui-thumb">
      <img src={dest} alt={alt} />
    </div>);
  }
};
