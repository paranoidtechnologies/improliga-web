import Component from '../../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import TeamDetail from '../../components/teams/detail.react';
import NotFound from '../../components/notfound.react';

export default class TeamDetailPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    teams: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    const {teamId} = this.props.params;
    this.props.actions.teams.loadTeamDetail(teamId);
  }

  render() {
    const {actions, msg, teams} = this.props;
    const team = teams.detail;

    if (!team) {
      return <NotFound msg={msg} />;
    }

    const title = team.name;
    const props = {
      actions: actions,
      team: team,
      msg: msg
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-show">
          <TeamDetail {...props} />
        </div>
      </DocumentTitle>
    );
  }
}
