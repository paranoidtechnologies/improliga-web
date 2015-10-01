import {expect} from 'chai';
import {actions, create} from 'client/components/events/actions';
import {createApiFetch} from '../../../utils';

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
    create(createApiFetch(null, responseBlank), dispatch).loadEventDetail();
  });
});
