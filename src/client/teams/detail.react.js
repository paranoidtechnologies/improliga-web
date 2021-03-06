import Component from 'react-pure-render/component';
import React from 'react';
import InfoItem from '../static/infoItem.react';
import Thumb from '../thumb.react';
import './detail.styl';

export default class TeamDetail extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    team: React.PropTypes.object.isRequired,
  }

  static defaultImage = '/assets/pixmaps/team/default.png';
  static defaultLogo = '/assets/pixmaps/team/default.png';

  render() {
    const {team, msg} = this.props;
    const {about, city, image, mail, name, site} = team;

    let imageUrl = image;
    let logoUrl = image;

    if (!imageUrl) {
      imageUrl = this.constructor.defaultImage;
    }

    if (!logoUrl) {
      logoUrl = this.constructor.defaultLogo;
    }

    return (<div className="team-detail">
      <section className="container">
        <h1 className="text-center">{name}</h1>

        <div className="col-sm-4">
          <div className="event-info">
            <div className="text-xs-center text-sm-left event-details">
              <InfoItem label={msg.city} value={city} />
              <InfoItem label={msg.site} type="link" value={site} />
              <InfoItem label={msg.mail} type="link-email" value={mail} />
            </div>
          </div>
        </div>

        <div className="col-sm-8 team-image">
          <div className="col-xs-4">
            <Thumb src={logoUrl} />
          </div>
          <div className="col-xs-8">
            <Thumb src={imageUrl} />
          </div>
        </div>

        <div className="team-desc">
          {about}
        </div>
      </section>
    </div>);
  }
}
