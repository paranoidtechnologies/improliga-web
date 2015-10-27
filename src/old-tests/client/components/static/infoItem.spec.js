import InfoItem from 'client/components/static/infoItem.react';
import {expect} from 'chai';
import {getChildren, render} from 'test/utils';
import React from 'react';

describe('Static info item', () => {
  it('renders string value', () => {
    const comp = <InfoItem label="foo" value="bar" />;
    const tree = render(comp);
    const cont = getChildren(tree);

    expect(cont).to.be.an('array');
    expect(cont.length).to.equal(2);

    const label = cont[0];
    const value = cont[1];

    expect(getChildren(label)).to.equal('foo');
    expect(getChildren(value)).to.equal('bar');
  });

  it('renders link', () => {
    const comp = <InfoItem label="foo" type="link" value="http://google.cz" />;
    const tree = render(comp);
    const cont = getChildren(tree);

    expect(cont).to.be.an('array');
    expect(cont.length).to.equal(2);

    const label = cont[0];
    const value = cont[1];
    const link = getChildren(value);

    expect(getChildren(label)).to.equal('foo');
    expect(link).to.be.an('object');
    expect(link.props.href).to.equal('http://google.cz');
    expect(getChildren(link)).to.equal('http://google.cz');

  });

  it('renders email link', () => {
    const comp = <InfoItem label="foo" type="link-email" value="test@foo.bar" />;
    const tree = render(comp);
    const cont = getChildren(tree);

    expect(cont).to.be.an('array');
    expect(cont.length).to.equal(2);

    const label = cont[0];
    const value = cont[1];
    const link = getChildren(value);

    expect(getChildren(label)).to.equal('foo');
    expect(link).to.be.an('object');
    expect(link.props.href).to.equal('mailto:test@foo.bar');
    expect(getChildren(link)).to.equal('test@foo.bar');

  });
});
