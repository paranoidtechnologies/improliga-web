import Component from '../component.react';
import React from 'react';
import Thumb from '../thumb.react';
import {Link} from 'react-router';
import './item.styl';

export default class TeamListItem extends Component {
  static propTypes = {
    createdAt: React.PropTypes.object,
    id: React.PropTypes.number.isRequired,
    image: React.PropTypes.object,
    logo: React.PropTypes.object,
    msg: React.PropTypes.object.isRequired,
    name: React.PropTypes.string,
    text: React.PropTypes.string
  };

  static defaultImage = '/assets/pixmaps/team/default-list.png';

  render() {
    const {id, image, logo, name} = this.props;
    let headerImage = this.constructor.defaultImage;

    if (image) {
      headerImage = image.url;
    }

    if (logo) {
      headerImage = logo.url;
    }

    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 ui-team-item">
        <Link className="team-inner" params={{teamId: id}} to="teamDetail">
          <div className="team-border">
            <div className="text-center team-image"><Thumb height={300} src={headerImage} width={300} /></div>
            <div className="text-center team-name">{name}</div>
          </div>
        </Link>
      </div>
    );
  }
}
