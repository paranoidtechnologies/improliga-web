import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import ShowsBrowser from './shows/browser';
import ShowsCalendar from './shows/calendar';
import moment from 'moment';

export default class Shows extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    pass: React.PropTypes.object,
    shows: React.PropTypes.object.isRequired
  }

  render() {
    const {msg, actions, params, pass, shows} = this.props;
    let date = moment();
    const month = date.month();
    const title = msg.pages.shows.title + ' ' + msg.app.months[month] + ' ' + date.format('YYYY');

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-shows">
          <div className="text-center">
            <h1>{title}</h1>
          </div>

          <section className="col-sm-4">
            <ShowsBrowser actions={actions.shows} items={shows.calendar} msg={msg.pages.shows} pass={pass} />
          </section>

          <section className="col-sm-8">
            <ShowsCalendar actions={actions.shows} items={shows.calendar} msg={msg.pages.shows} />
          </section>
        </div>
      </DocumentTitle>
    );
  }
}
