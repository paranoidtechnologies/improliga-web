import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import EventMonth from '../events/month.react';
import EventListItem from '../events/listItem.react';
import React from 'react';
import moment from 'moment';
import './shows.styl';

export default class Workshops extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    workshops: React.PropTypes.object.isRequired,
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
      return this.props.actions.workshops.loadCalendarWorkshops(mon);
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
    const {msg, workshops} = this.props;
    const date = this.getMonth();
    const month = date.month();
    const title = msg.pages.workshops.title + ' ' + msg.app.months[month] + ' ' + date.format('YYYY');

    const props = {
      formatDate: msg.app.format.date.exact,
      formatTime: msg.app.format.time.exact,
      items: workshops.calendar,
      listDraw: EventListItem,
      month: date,
      msg: {
        title: msg.pages.workshops.title,
        calendar: msg.pages.workshops,
        month: date,
        months: msg.app.months,
        list: msg.pages.workshops
      },
      routeArchive: 'workshopsArchive',
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
