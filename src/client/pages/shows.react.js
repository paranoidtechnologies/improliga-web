import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import EventMonth from '../components/events/month.react';
import EventListItem from '../components/events/listItem.react';
import React from 'react';
import moment from 'moment';
import './shows.styl';

export default class Shows extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
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
      return this.props.actions.shows.loadCalendarShows(mon);
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
    const {msg, shows} = this.props;
    const date = this.getMonth();
    const month = date.month();
    const title = msg.pages.shows.title + ' ' + msg.app.months[month] + ' ' + date.format('YYYY');

    const props = {
      formatDate: msg.app.format.date.exact,
      formatTime: msg.app.format.time.exact,
      items: shows.calendar,
      listDraw: EventListItem,
      month: date,
      msg: {
        title: msg.pages.shows.title,
        calendar: msg.pages.shows,
        month: date,
        months: msg.app.months,
        list: msg.pages.shows
      },
      routeArchive: 'showsArchive'
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-shows">
          <EventMonth {...props} />
        </div>
      </DocumentTitle>
    );
  }
}
