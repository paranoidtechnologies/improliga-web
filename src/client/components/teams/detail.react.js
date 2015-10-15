import React from 'react';
import Component from '../component.react';
import InfoItem from '../static/infoItem.react';
import Thumb from '../thumb.react';

export default class TeamDetail extends Component {
  static propTypes = {
    team: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
  }

  static defaultImage = '/assets/pixmaps/team/default.png';

  render() {
    const {team, msg} = this.props;
    const {about, city, fb, image, mail, name, site} = team;

    let imageUrl = image;

    if (!imageUrl) {
      imageUrl = this.constructor.defaultImage;
    }

    return (<div className="event-detail">
      <section className="container">
        <h1>{name}</h1>

        <div className="col-md-4">
          <div className="event-info">
            <div className="text-xs-center text-sm-left event-details">
              <InfoItem label={msg.city} value={city} />
              <InfoItem label={msg.site} type="link" value={site} />
              <InfoItem label={msg.mail} type="link-email" value={mail} />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <Thumb src={imageUrl} />
        </div>

        <div className="team-desc">
          {about}
        </div>

        <div className="col-sm-6 event-imagery">
          <div className="event-image">
          </div>
        </div>
      </section>
    </div>);
  }
}
