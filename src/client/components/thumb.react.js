import Component from './component.react';
import React from 'react';

export default class Thumb extends Component {
  static propTypes = {
    alt: React.PropTypes.string,
    height: React.PropTypes.number,
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number
  }

  static defaultProps = {
    alt: 'thumb',
    height: 240,
    width: 320
  }

  render() {
    const {alt, height, src, width} = this.props;
    const dest = src + '?width=' + width + '&height=' + height;

    return (<div className="ui-thumb">
      <img alt={alt} src={dest} />
    </div>);
  }
};
