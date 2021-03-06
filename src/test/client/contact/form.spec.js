import {expect} from 'chai';
import {getChildren, render} from 'test/utils';
import {Map} from 'immutable';
import ContactForm from 'client/contact/form.react';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const subjects = {
  novice: 'novice',
  invite: 'invite',
  cili: 'cili',
  team: 'team',
  support: 'support',
  generic: 'generic'
};

const msg = {
  title: 'title',
  cancel: 'cancel',
  desc: 'desc',
  email: 'email',
  message: 'message',
  send: 'send',
  subjects: subjects,
  response: {}
};

const store = {
  subject: null
};

const propsDefault = {
  actions: {
    setSubject: function(subject) {
      store.subject = subject;
    }
  },
  response: new Map({}),
  msg: msg,
  store: store,
  subjects: subjects
};

describe('Contact form', () => {

  it('renders', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = render(comp);

    const cont = getChildren(tree);

    const header = cont[0];
    const opts = cont[1];
    const rspn = cont[2];
    const form = cont[3];

    expect(header).to.be.an('object');
    expect(opts).to.be.an('object');
    expect(rspn).to.be.an('object');
    expect(form).to.be.an('object');

    const headerCont = getChildren(header);
    const title = headerCont[0];
    const desc = headerCont[1];

    expect(title).to.be.an('object');
    expect(desc).to.be.an('object');

    expect(getChildren(title)).to.equal(msg.title);
    expect(getChildren(getChildren(desc))).to.equal(msg.desc);

    expect(opts.props.className.split(' ')).to.contain('form-options');
    expect(form.props.className.split(' ')).to
      .contain('ui-form')
      .contain('hidden');

    const optItems = getChildren(opts);

    expect(optItems).to.be.an('array');
    expect(optItems.length).to.equal(6);
  });

  it('sets subject on option click and cancel', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = TestUtils.renderIntoDocument(comp);
    const optsCont = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-options');
    const form = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-cont');
    const cancel = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-cancel');

    expect(TestUtils.isDOMComponent(optsCont));
    expect(TestUtils.isDOMComponent(form));

    expect(optsCont.className.split(' ')).to.not.contain('hidden');
    expect(form.className.split(' ')).to.contain('hidden');

    expect(TestUtils.isCompositeComponent(tree));

    const opts = TestUtils.scryRenderedDOMComponentsWithClass(tree, 'form-opt');
    const itemLabels = TestUtils.scryRenderedDOMComponentsWithClass(tree, 'item-label');

    expect(opts).to.be.an('array');
    expect(opts.length).to.equal(6);

    opts.forEach(function(item, index) {
      const itemLabel = itemLabels[index];

      expect(TestUtils.isDOMComponent(cancel));
      expect(TestUtils.isDOMComponent(itemLabel));

      // Select an option
      TestUtils.Simulate.click(item);
      expect(store.subject).to.equal(itemLabel.innerHTML);

      // Cancel button
      TestUtils.Simulate.click(cancel);
      expect(store.subject).to.equal(null);
    });
  });

  it('renders form visible if subject is not empty', () => {
    let comp = <ContactForm {...propsDefault} />;
    let tree = TestUtils.renderIntoDocument(comp);
    let optsCont = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-options');
    let form = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-cont');

    expect(TestUtils.isDOMComponent(optsCont));
    expect(TestUtils.isDOMComponent(form));
    expect(optsCont.className.split(' ')).to.not.contain('hidden');
    expect(form.className.split(' ')).to.contain('hidden');

    comp = <ContactForm {...propsDefault} subject="novice" />;
    tree = TestUtils.renderIntoDocument(comp);
    optsCont = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-options');
    form = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-cont');

    expect(optsCont.className.split(' ')).to.contain('hidden');
    expect(form.className.split(' ')).to.not.contain('hidden');
  });

  it('creates refs', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = TestUtils.renderIntoDocument(comp);

    expect(tree.refs.email).to.be.an('object');
    expect(tree.refs.message).to.be.an('object');
    expect(tree.refs.subject).to.be.an('object');
  });

  it('reads data from inputs', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = TestUtils.renderIntoDocument(comp);
    const inputs = tree.refs;
    let data = tree.getData();
    let inputNodes = {};

    expect(data).to.be.an('object');
    expect(data).to.have.a.property('email');
    expect(data).to.have.a.property('message');
    expect(data).to.have.a.property('subject');

    expect(data).to.deep.equal({
      email: '',
      message: '',
      subject: '',
    });

    for (let input in inputs) {
      inputNodes[input] = inputs[input].refs.userInput;
    }

    inputNodes.email.value = 'email';
    inputNodes.message.value = 'message';
    inputNodes.subject.value = 'subject';

    data = tree.getData();

    expect(data).to.deep.equal({
      email: 'email',
      message: 'message',
      subject: 'subject',
    });
  });

  it('validates properly', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = TestUtils.renderIntoDocument(comp);
    const inputs = tree.refs;
    let inputNodes = {};

    for (let input in inputs) {
      inputNodes[input] = inputs[input].refs.userInput;
    }

    expect(tree.state.invalid).to.be.an('array');
    expect(tree.state.invalid).to.be.empty;

    expect(tree.validate()).to.equal(false);
    expect(tree.state.invalid).to.contain('email');
    expect(tree.state.invalid).to.contain('message');
    expect(tree.state.invalid).to.contain('subject');

    inputNodes.email.value = 'email';
    inputNodes.message.value = 'message';
    inputNodes.subject.value = 'subject';

    expect(tree.validate()).to.equal(false);
    expect(tree.state.invalid).to.contain('email');
    expect(tree.state.invalid).to.not.contain('message');
    expect(tree.state.invalid).to.not.contain('subject');

    inputNodes.email.value = 'email@test.com';
    expect(tree.validate()).to.equal(true);
    expect(tree.state.invalid).to.be.empty;
  });
});
