import Component from 'react-pure-render/component';
import React from 'react';
import './location.styl';

export default class eventLocation extends Component {
  static propTypes = {
    addr: React.PropTypes.string,
    msg: React.PropTypes.object,
    name: React.PropTypes.string,
    site: React.PropTypes.string,
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
      <div className="event-info-label location-name">{name}</div>
      <div className="location-addr">{addr}</div>
      {elSite}
    </div>);
  }
}
