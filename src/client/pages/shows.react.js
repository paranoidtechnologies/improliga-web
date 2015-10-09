import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import ShowsBrowser from './shows/browser';
import ShowsCalendar from './shows/calendar';

export default class Shows extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    pass: React.PropTypes.object,
    shows: React.PropTypes.object.isRequired
  }

  render() {
    const {msg, actions, pass, shows} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="ui-page ui-page-shows">
          <section className="col-sm-4">
            <ShowsBrowser actions={actions.shows} pass={pass} items={shows.calendar} msg={msg.pages.shows} />
          </section>

          <section className="col-sm-8">
            <ShowsCalendar actions={actions.shows} items={shows.calendar} msg={msg.pages.shows} />
          </section>
        </div>
      </DocumentTitle>
    );
  }
}
