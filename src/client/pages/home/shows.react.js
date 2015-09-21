import React from 'react';
import Component from '../../components/component.react';
import ShowsBrowser from './shows/browser';
import ShowsCalendar from './shows/calendar';
import './shows.styl';
import {Link} from 'react-router';

export default class Shows extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired,
    showsCalendar: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    shows: { list: [] },
    showsCalendar: { list: [] }
  }

  render() {
    const {
      msg: msg,
      actions: actions,
      shows: shows,
      showsCalendar: showsCalendar
    } = this.props;

    return (
      <section className="container ui-section ui-section-shows">
        <h2 className="text-center">{msg.pages.shows.title}</h2>

        <div className="text-justify">
          <p>{msg.pages.shows.hottest} <Link to="shows">{msg.pages.shows.sectionShows}</Link>.</p>
        </div>

        <div className="container col-md-6">
          <ShowsBrowser actions={actions} items={shows.list} msg={msg.pages.shows} />
        </div>

        <div className="container col-md-6">
          <ShowsCalendar actions={actions} items={showsCalendar.list} msg={msg.app.days} />
        </div>
        <div className="cleaner" />
      </section>
    );
  }
};

