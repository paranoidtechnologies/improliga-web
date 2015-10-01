import Component from '../component.react';
import React from 'react';
import Thumb from '../thumb.react';
import {Link} from 'react-router';

export default class DayItem extends Component {
  static propTypes = {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    name: React.PropTypes.string
  }

  render() {
    const {id, name, image} = this.props;
    const params = {
      showId: id
    };
    let imageUrl = '';

    if (image) {
      imageUrl = image.url;
    }

    return (
      <Link className="col-xs-6 day-item event" params={params} to="show">
        <div className="day-item-name">{name}</div>
        <div className="day-item-image">
          <Thumb height={40} src={imageUrl} width={40} />
        </div>
      </Link>
    );
  }
}
