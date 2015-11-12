import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import TeamList from '../teams/list.react';
import React from 'react';
import './teams.styl';
import fetch from '../../common/components/fetch';
import {loadTeamsPage} from '../../common/teams/actions';

@fetch(loadTeamsPage)
export default class TeamsPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object,
    msg: React.PropTypes.object,
    params: React.PropTypes.object,
    teams: React.PropTypes.object
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const {msg, teams} = this.props;
    const title = msg.pages.teams.title;

    const props = {
      items: teams.list,
      msg: msg
    };

    console.log(this.props.actions);

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
