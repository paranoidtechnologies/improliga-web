import Component from '../component.react';
import React from 'react';
import {Link} from 'react-router';

export default class TeamListItem extends Component {
  static propTypes = {
    createdAt: React.PropTypes.object,
    msg: React.PropTypes.object.isRequired,
    name: React.PropTypes.string,
    text: React.PropTypes.string
  };

  render() {
    const {id, name, createdAt} = this.props;

    return (
      <div className="ui-team-item">
        <div className="team-name">
          {name}
        </div>
      </div>
    );
  }
}
