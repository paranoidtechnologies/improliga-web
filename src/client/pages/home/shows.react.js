import Component from 'react-pure-render/component';
import React from 'react';
import ShowsBrowser from '../shows/browser';
import './shows.styl';
import {Link} from 'react-router';
import fetch from '../../../common/components/fetch';
import {loadUpcomingShows} from '../../../common/shows/actions';

@fetch(loadUpcomingShows)
export default class Shows extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    pass: React.PropTypes.object,
    shows: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    shows: {
      list: [],
      calendar: []
    }
  }

  render() {
    const {msg, shows, pass} = this.props;

    return (
      <section className="container ui-section ui-section-shows">
        <div className="container col-xs-6">
          <h2>{msg.pages.shows.title}</h2>

          <div className="text-justify">
            <p>{msg.pages.shows.hottest} <Link to="shows">{msg.pages.shows.sectionShows}</Link>.</p>
          </div>

          <ShowsBrowser items={shows.list} msg={msg.pages.shows} pass={pass} />
        </div>

        <div className="cleaner" />
      </section>
    );
  }
};

