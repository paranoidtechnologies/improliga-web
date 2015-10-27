import {expect} from 'chai';
import {actions, create} from 'common/contact/actions';
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

  it('dispatches contact form subject store', (done) => {
    const dispatch = (action, data) => {
      expect(action).to.equal(actions.setSubject);
      expect(data).to.equal('foo');
      done();
    };

    expect(actions.setSubject).to.be.an('function');
    create(null, dispatch).setSubject('foo');
  });
});
