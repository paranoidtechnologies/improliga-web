import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';

export default class Event extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    event: {}
  }

  componentDidMount() {
    this.props.actions.events.loadEventDetail(this.props.params.showId);
  }

  render() {
    const {msg, event} = this.props;
    console.log(this.props);

    return (
      <DocumentTitle title={msg.title}>
        <div className="ui-page ui-page-show">
          <section className="container">
            <h1>{event.name}</h1>

          </section>
        </div>
      </DocumentTitle>
    );
  }
}
