import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import EventMonth from '../events/month.react';
import EventListItem from '../events/listItem.react';
import React, {PropTypes} from 'react';
import moment from 'moment';
import fetch from '../../common/components/fetch';
import {loadCalendarWorkshops} from '../../common/workshops/actions';
import './shows.styl';

const {func, object} = PropTypes;
const curMonth = moment();

@fetch(loadCalendarWorkshops, curMonth)
export default class Workshops extends Component {

  static propTypes = {
    dispatch: func,
    intl: object,
    msg: object,
    params: object,
    workshops: object
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
      return dispatch(loadCalendarWorkshops, mon);
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
    const {intl, msg, workshops} = this.props;
    const date = this.getMonth();
    const month = date.month();
    const title = msg.pages.workshops.title + ' ' + msg.months[month] + ' ' + date.format('YYYY');

    const props = {
      formatDate: msg.format.date.exact,
      formatTime: msg.format.time.exact,
      items: workshops.calendar,
      lang: intl.selectedLanguage,
      listDraw: EventListItem,
      month: date,
      msg: {
        title: msg.pages.workshops.title,
        calendar: msg.pages.workshops,
        month: date,
        months: msg.months,
        list: msg.pages.workshops
      },
      routeArchive: 'workshops:archive',
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
