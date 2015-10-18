import {expect} from 'chai';
import {actions, create} from 'client/components/contact/actions';
import {mockApi} from 'test/utils';

const responseBlank = {
  body: {
  }
};

describe('Contact actions', () => {
  it('dispatches contact form reponse', (done) => {
    const dispatch = (action) => {
      expect(action).to.equal(actions.sendContactForm);
      done();
    };

    expect(actions.sendContactForm).to.be.an('function');
    create(mockApi(null, responseBlank), dispatch).sendContactForm();
  });
});
