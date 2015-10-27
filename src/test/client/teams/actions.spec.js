import {expect} from 'chai';
import {actions, create} from 'common/teams/actions';
import {mockApi} from 'test/utils';

const responseBlank = {
  body: {
  }
};

describe('Team actions', () => {
  it('dispatches team list', (done) => {
    const dispatch = (action) => {
      expect(action).to.equal(actions.loadTeamsPage);
      done();
    };

    expect(actions.loadTeamsPage).to.be.an('function');
    create(mockApi(null, responseBlank), dispatch).loadTeamsPage();
  });


  it('dispatches team detail', (done) => {
    const dispatch = (action) => {
      expect(action).to.equal(actions.loadTeamDetail);
      done();
    };

    expect(actions.loadTeamDetail).to.be.an('function');
    create(mockApi(null, responseBlank), dispatch).loadTeamDetail();
  });
});
