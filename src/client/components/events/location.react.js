import React from 'react';
import Component from '../component.react';
import './location.styl';

export default class eventLocation extends Component {
  static propTypes = {
    msg: React.PropTypes.object,
  }

  render() {
    const {name, addr, site} = this.props;
    let elSite = null;

    if (site) {
      elSite = (<div className="location-site">
        <a href={site}>{site}</a>
      </div>);
    }

    return (<div className="event-info-item event-location">
      <div className="location-name">{name}</div>
      <div className="location-addr">{addr}</div>
      {elSite}
    </div>);
  }
}
