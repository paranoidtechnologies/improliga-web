import ContactForm from 'client/components/contact/form.react';
import {getChildren, render} from 'test/utils';
import React from 'react/addons';

import moment from 'moment';

describe('Contact form', () => {
  const msg = {
    title: 'title',
    cancel: 'cancel',
    desc: 'desc',
    email: 'email',
    message: 'message',
    send: 'send',
    subjects: {
    }
  };

  const propsDefault = {
    actions: {},
    msg: msg,
    subjects: {
      novice: 'novice',
      invite: 'invite',
      cili: 'cili',
      team: 'team',
      support: 'support',
      generic: 'generic'
    }
  };

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

    expect(opts._store.props.className.split(' ')).to.contain('ui-contact-form-options');
    expect(form._store.props.className.split(' ')).to
      .contain('ui-form')
      .contain('hidden');

    const optItems = getChildren(opts);

    expect(optItems).to.be.an('array');
    expect(optItems.length).to.equal(6);
  });

  it('set subject on option click', () => {
    const comp = <ContactForm {...propsDefault} />;
    const tree = render(comp);
    const cont = getChildren(tree)
    const optsCont = cont[1];
    const form = cont[2];
    const opts = getChildren(optsCont);

    React.addons.TestUtils.Simulate.click(opts[0]);

    console.log(comp.state);

  });

  it('show form on subject select', () => {
  });

  it('hide form on cancel', () => {
  });
});
