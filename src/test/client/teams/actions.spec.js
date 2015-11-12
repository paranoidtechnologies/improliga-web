import {expect} from 'chai';
import * as actions from 'common/teams/actions';
import {mockApi} from 'test/utils';

describe('Team actions', () => {
  it('dispatches team list', () => {
    expect(actions.loadTeamsPage).to.be.an('function');
  });

  it('dispatches team detail', () => {
    expect(actions.loadTeamDetail).to.be.an('function');
  });
});
