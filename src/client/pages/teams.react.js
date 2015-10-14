import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import TeamList from '../components/teams/list.react';
import React from 'react';

export default class TeamsPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    return this.props.actions.teams.loadTeamsPage();
  }

  render() {
    const {msg, teams} = this.props;
    const title = msg.pages.teams.title;

    const props = {
      items: teams.list,
      msg: msg
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-teams">
          <h1 className="text-center">{msg.pages.teams.title}</h1>
          <TeamList {...props} />
        </div>
      </DocumentTitle>
    );
  }
}
