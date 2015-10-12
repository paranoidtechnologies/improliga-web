import ContactForm from 'client/components/contact/form.react';
import {getChildren, render} from 'test/utils';
import React from 'react';
import moment from 'moment';

describe('Event month calendar and list', () => {
  const msg = {
    title: 'title',
    cancel: 'cancel',
    desc: 'desc',
    email: 'email',
    message: 'message',
    send: 'send',
  };

  it('renders blank', () => {
    const props = {
      actions: {},
      msg: msg,
      subjects: {}
    };
    const comp = <ContactForm {...props} />;
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



  });
});
