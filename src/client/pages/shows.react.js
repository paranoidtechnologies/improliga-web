import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import EventMonth from '../events/month.react';
import EventListItem from '../events/listItem.react';
import React, {PropTypes} from 'react';
import moment from 'moment';
import fetch from '../../common/components/fetch';
import {loadCalendarShows} from '../../common/shows/actions';
import './shows.styl';

const {func, object} = PropTypes;
const curMonth = moment();

@fetch(loadCalendarShows, curMonth)
export default class Shows extends Component {

  static propTypes = {
    dispatch: func,
    intl: object,
    msg: object,
    params: object,
    shows: object
  }

  userMonth = null

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    const {dispatch} = this.props;
    const mon = this.getMonth().format('YYYY-MM');

    if (this.userMonth !== mon) {
      this.userMonth = mon;
      return dispatch(loadCalendarShows, mon);
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
    const {intl, msg, shows} = this.props;
    const date = this.getMonth();
    const month = date.month();
    const title = msg.pages.shows.title + ' ' + msg.months[month] + ' ' + date.format('YYYY');

    const props = {
      formatDate: msg.format.date.exact,
      formatTime: msg.format.time.exact,
      items: shows.calendar,
      lang: intl.selectedLanguage,
      listDraw: EventListItem,
      month: date,
      msg: {
        title: msg.pages.shows.title,
        calendar: msg.pages.shows,
        month: date,
        months: msg.months,
        list: msg.pages.shows
      },
      routeArchive: 'shows:archive'
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
