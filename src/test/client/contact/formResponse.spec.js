import {expect} from 'chai';
import {getChildren, render} from 'test/utils';
import {Map} from 'immutable';
import ContactFormResponse from 'client/contact/formResponse.react';
import React from 'react';

const msg = {
  specificError: 'specificError',
  unknownError: 'unknownError',
  success: 'success',
};

describe('Contact form response', () => {

  it('renders success', () => {
    const comp = (<ContactFormResponse msg={msg} response={new Map({
      error: null,
      result: true
    })} />);

    const tree = render(comp);
    const cname = tree.props.className.split(' ');

    expect(cname).to.contain('form-response');
    expect(cname).to.contain('response-success');

    const message = getChildren(tree);

    expect(message).to.be.an('object');
    expect(getChildren(message)).to.equal(msg.success);
  });

  it('renders specific error', () => {
    const comp = (<ContactFormResponse msg={msg} response={new Map({
      error: 'specificError',
      result: false
    })} />);

    const tree = render(comp);
    const cname = tree.props.className.split(' ');

    expect(cname).to.contain('response-error');

    const message = getChildren(tree);

    expect(message).to.be.an('object');
    expect(getChildren(message)).to.equal(msg.specificError);
  });

  it('renders unknown error with unrecognized error info', () => {
    const comp = (<ContactFormResponse msg={msg} response={new Map({
      error: 'errorFoo',
      result: false
    })} />);

    const tree = render(comp);
    const message = getChildren(tree);

    expect(message).to.be.an('object');
    expect(getChildren(message)).to.equal(msg.unknownError);
  });

  it('renders unknown error with no error info', () => {
    const comp = (<ContactFormResponse msg={msg} response={new Map({
      error: null,
      result: false
    })} />);

    const tree = render(comp);
    const message = getChildren(tree);

    expect(message).to.be.an('object');
    expect(getChildren(message)).to.equal(msg.unknownError);
  });
});
