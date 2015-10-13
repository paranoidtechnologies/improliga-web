import {expect} from 'chai';
import {getChildren, getInstance, render} from 'test/utils';
import ContactForm from 'client/components/contact/form.react';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;
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
  subjects: subjects
};

const propsDefault = {
  actions: {},
  msg: msg,
  subjects: subjects
};

describe('Contact form', () => {

  it('renders', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = render(comp);

    const cont = getChildren(tree);

    const header = cont[0];
    const opts = cont[1];
    const form = cont[2];

    expect(header).to.be.an('object');
    expect(opts).to.be.an('object');
    expect(form).to.be.an('object');

    const headerCont = getChildren(header);
    const title = headerCont[0];
    const desc = headerCont[1];

    expect(title).to.be.an('object');
    expect(desc).to.be.an('object');

    expect(getChildren(title)).to.equal(msg.title);
    expect(getChildren(getChildren(desc))).to.equal(msg.desc);

    expect(opts._store.props.className.split(' ')).to.contain('form-options');
    expect(form._store.props.className.split(' ')).to
      .contain('ui-form')
      .contain('hidden');

    const optItems = getChildren(opts);

    expect(optItems).to.be.an('array');
    expect(optItems.length).to.equal(6);
  });

  it('sets subject on option click and shows/hides form on cancel', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = TestUtils.renderIntoDocument(comp);
    const optsCont = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-options');
    const form = TestUtils.findRenderedDOMComponentWithClass(tree, 'form-cont');

    expect(TestUtils.isDOMComponent(optsCont));
    expect(TestUtils.isDOMComponent(form));
    expect(optsCont.props.className.split(' ')).to.not.contain('hidden');
    expect(form.props.className.split(' ')).to.contain('hidden');

    const opts = TestUtils.findAllInRenderedTree(optsCont, function(comp) {
      return ~comp.props.className.split(' ').indexOf('form-opt');
    });

    expect(opts).to.be.an('array');
    expect(opts.length).to.equal(6);

    opts.forEach(function(item) {
      const itemLabel = TestUtils.findRenderedDOMComponentWithClass(item, 'item-label');
      const cancel = TestUtils.findRenderedDOMComponentWithClass(form, 'form-cancel');

      expect(TestUtils.isDOMComponent(cancel));
      expect(TestUtils.isDOMComponent(itemLabel));

      // Select an option
      TestUtils.Simulate.click(item);
      expect(optsCont.props.className.split(' ')).to.contain('hidden');
      expect(form.props.className.split(' ')).to.not.contain('hidden');

      const hidden = TestUtils.findRenderedDOMComponentWithClass(tree, 'ui-input-hidden');
      expect(TestUtils.isCompositeComponent(hidden));

      const hiddenInput = TestUtils.findRenderedDOMComponentWithTag(hidden, 'input');
      expect(TestUtils.isDOMComponent(hiddenInput));
      expect(hiddenInput.props.value).to.equal(itemLabel.props.children);

      // Cancel button
      TestUtils.Simulate.click(cancel);
      expect(optsCont.props.className.split(' ')).to.not.contain('hidden');
      expect(form.props.className.split(' ')).to.contain('hidden');
    });
  });
});
