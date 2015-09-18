import Component from '../../../components/component.react';
import React from 'react';
import {Link} from 'react-router';

export default class ShowsHead {
  static propTypes = {
    msg: React.PropTypes.object.required
  }

  render() {
    const {msg} = this.props;

    return (
      <div className="row shows-heading">
        <h2 className="text-center">{msg.title}</h2>

        <div class="text-justify">
          <p>{msg.hottest} <Link to="shows">{msg.sectionShows}</Link>.</p>
        </div>
      </div>
    );
  }
}
