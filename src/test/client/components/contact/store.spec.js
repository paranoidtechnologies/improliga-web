import {actions} from 'client/components/contact/actions';
import {expect} from 'chai';
import store from 'client/components/contact/store';
import {List, Record} from 'immutable';

describe('Contact form store', () => {
  it('stores sendContactForm', () => {
    const payload = {
      name: 'foo'
    };

    let res = store();

    expect(res).to.be.an.instanceof(Record);

    expect(res.formResponse.get('error')).to.equal(null);
    expect(res.formResponse.get('status')).to.equal(null);
    expect(res.formResponse.get('result')).to.equal(null);

    res = store(undefined, actions.sendContactForm, payload);
    expect(res).to.be.an('object');

    expect(res.formResponse).to.be.an('object');
    expect(res.formResponse.get('name')).to.be.an('undefined');
    expect(res.formResponse.get('result')).to.equal(false);
    expect(res.formResponse.get('error')).to.be.an('undefined');
    expect(res.formResponse.get('status')).to.be.an('undefined');
  });

  it('stores response errors', () => {
    const res = store(undefined, actions.sendContactForm, {
      message: 'not-found',
      status: 404,
    });

    expect(res.formResponse.get('error')).to.equal('not-found');
    expect(res.formResponse.get('status')).to.equal(404);
    expect(res.formResponse.get('result')).to.equal(false);
  });

  it('stores response success', () => {
    const res = store(undefined, actions.sendContactForm, {
      message: 'ok',
      status: 200,
    });

    expect(res.formResponse.get('error')).to.equal('ok');
    expect(res.formResponse.get('status')).to.equal(200);
    expect(res.formResponse.get('result')).to.equal(true);
  });
});
