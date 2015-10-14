import {expect} from 'chai';
import {actions, create} from 'client/components/teams/actions';
import {createApiFetch} from '../../../utils';

const responseBlank = {
  body: {
  }
};

describe('Team actions', () => {
  it('responds to team list', (done) => {

    const dispatch = (action) => {
      expect(action).to.equal(actions.loadTeamsPage);
      done();
    };

    expect(actions.loadTeamsPage).to.be.an('function');
    create(createApiFetch(null, responseBlank), dispatch).loadTeamsPage();
  });
});
