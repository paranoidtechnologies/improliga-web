import {expect} from 'chai';
import * as actions from 'common/contact/actions';
import {mockApi} from 'test/utils';

const responseBlank = {
  body: {
  }
};

describe('Contact actions', () => {
  it('send contact form exists', () => {
    expect(actions.sendContactForm).to.be.an('function');
  });

  it('set contact form subject exists', () => {
    expect(actions.sendContactForm).to.be.an('function');
  });

  it('set contact form dispatches', () => {
    expect(actions.setSubject).to.be.an('function');

    const res = actions.setSubject('foo');

    expect(res).to.be.an('object');
    expect(res.type).to.equal(actions.SET_SUBJECT);
    expect(res.payload).to.equal('foo');
  });
});
