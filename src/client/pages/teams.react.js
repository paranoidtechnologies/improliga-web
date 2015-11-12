import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import TeamList from '../teams/list.react';
import React, {PropTypes} from 'react';
import './teams.styl';
import fetch from '../../common/components/fetch';
import {loadTeamsPage} from '../../common/teams/actions';

const {object} = PropTypes;

@fetch(loadTeamsPage)
export default class TeamsPage extends Component {

  static propTypes = {
    intl: object,
    msg: object,
    params: object,
    teams: object
  }

  render() {
    const {intl, msg, teams} = this.props;
    const title = msg.pages.teams.title;

    const props = {
      lang: intl.selectedLanguage,
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
