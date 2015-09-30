import Component from '../component.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import Thumb from '../thumb.react';
import {Link} from 'react-router';

export default class DayItem extends Component {
  static propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    image: React.PropTypes.object
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
      <Link to="show" params={params} className="col-xs-6 day-item event">
        <div className="day-item-name">{name}</div>
        <div className="day-item-image">
          <Thumb height={40} src={imageUrl} width={40} />
        </div>
      </Link>
    );
  }
}
