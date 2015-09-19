import React from 'react';
import Component from '../../components/component.react';
import ShowsBrowser from './shows/browser';
import './shows.styl';
import {Link} from 'react-router';

export default class Shows extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired
  }

  render() {
    const {
      msg: msg,
      actions: actions,
      shows: shows
    } = this.props;

    return (
      <section className="ui-section ui-section-shows">
        <h2 className="text-center">{msg.title}</h2>

        <div class="text-justify">
          <p>{msg.hottest} <Link to="shows">{msg.sectionShows}</Link>.</p>
        </div>


        <div className="container col-md-6">
          <ShowsBrowser actions={actions} items={shows.list} msg={msg} />
        </div>
        <div className="cleaner" />
      </section>
    );
  }
};

