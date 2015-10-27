import {expect} from 'chai';
import {actions, create} from 'common/events/actions';
import {mockApi} from 'test/utils';

const responseBlank = {
  body: {
  }
};

describe('Event actions', () => {
  it('responds to event detail', (done) => {

    const dispatch = (action) => {
      expect(action).to.equal(actions.loadEventDetail);
      done();
    };

    expect(actions.loadEventDetail).to.be.an('function');
    create(mockApi(null, responseBlank), dispatch).loadEventDetail();
  });
});
