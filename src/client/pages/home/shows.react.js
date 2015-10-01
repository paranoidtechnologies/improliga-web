import React from 'react';
import Component from '../../components/component.react';
import ShowsBrowser from '../shows/browser';
import './shows.styl';
import {Link} from 'react-router';

export default class Shows extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    shows: {
      list: [],
      calendar: []
    }
  }

  render() {
    //~ const month = moment();
    const {
      msg: msg,
      actions: actions,
      shows: shows
    } = this.props;

    return (
      <section className="container ui-section ui-section-shows">
        <div className="container col-xs-6">
          <h2>{msg.pages.shows.title}</h2>

          <div className="text-justify">
            <p>{msg.pages.shows.hottest} <Link to="shows">{msg.pages.shows.sectionShows}</Link>.</p>
          </div>

          <ShowsBrowser actions={actions} items={shows.list} msg={msg.pages.shows} />
        </div>

        <div className="cleaner" />
      </section>
    );
  }
};

