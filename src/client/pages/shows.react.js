import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import ShowsBrowser from './shows/browser';
import ShowsCalendar from './shows/calendar';
import {Link} from 'react-router';
import moment from 'moment';
import './shows.styl';

export default class Shows extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired
  }

  curMonth = null

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    const mon = this.getMonth().format('YYYY-MM');

    if (this.curMonth !== mon) {
      this.curMonth = mon;
      return this.props.actions.shows.loadCalendarEvents(mon);
    }
  }

  getMonth() {
    const {params} = this.props;
    let date = moment();

    if (params.month) {
      date = moment(params.month, 'YYYY-MM');

      if (!date.isValid()) {
        return null;
      }
    }

    return date;
  }

  render() {
    const {msg, actions, shows} = this.props;
    const date = this.getMonth();
    const prev = date.clone().subtract(1, 'month');
    const next = date.clone().add(1, 'month');
    const month = date.month();
    const title = msg.pages.shows.title + ' ' + msg.app.months[month] + ' ' + date.format('YYYY');
    const pass = {
      formatDate: msg.app.format.date.exact,
      formatTime: msg.app.format.time.exact,
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-shows">
          <div className="text-center">
            <h1>{title}</h1>
          </div>

          <section className="controls">
            <div className="col-xs-6 text-center">
              <Link to="showsArchive" params={{month: prev.format('YYYY-MM')}}>&lt; {msg.app.months[prev.month()]} {prev.format('YYYY')}</Link>
            </div>
            <div className="col-xs-6 text-center">
              <Link to="showsArchive" params={{month: next.format('YYYY-MM')}}>{msg.app.months[next.month()]} {next.format('YYYY')} &gt;</Link>
            </div>
            <div className="cleaner" />
          </section>

          <section className="col-sm-5">
            <ShowsBrowser actions={actions.shows} items={shows.calendar} msg={msg.pages.shows} pass={pass} />
          </section>

          <section className="col-sm-7">
            <ShowsCalendar actions={actions.shows} items={shows.calendar} msg={msg.pages.shows} month={date} />
          </section>
        </div>
      </DocumentTitle>
    );
  }
}
