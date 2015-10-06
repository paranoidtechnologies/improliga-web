import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import EventDetail from '../components/events/detail.react';
import NotFound from '../components/notfound.react';

export default class Event extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    events: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.events.loadEventDetail(this.props.params.showId);
  }

  render() {
    const {actions, msg, events} = this.props;
    const event = events.detail;
    const msgDetail = msg.components.event.detail;
    const props = {
      actions: actions,
      event: event,
      msg: msgDetail
    };
    const title = event ? event.name : '';


    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-show">
          {event ? <EventDetail {...{props}} /> : <NotFound msg={msg} />}
        </div>
      </DocumentTitle>
    );
  }
}
