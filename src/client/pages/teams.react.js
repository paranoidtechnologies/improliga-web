import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import TeamList from '../teams/list.react';
import React from 'react';
import './teams.styl';

export default class TeamsPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    teams: React.PropTypes.object.isRequired
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
