import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React from 'react';
import EventDetail from '../events/detail.react';
import NotFound from './notfound.react';

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

    if (!event) {
      return <NotFound msg={msg} />;
    }

    const msgDetail = msg.components.event.detail;
    const title = event.get('name');
    const props = {
      actions: actions,
      event: event.toJS(),
      formatDate: msg.app.format.date.exact,
      formatTime: msg.app.format.time.exact,
      msg: msgDetail
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-show">
          <EventDetail {...props} />
        </div>
      </DocumentTitle>
    );
  }
}
