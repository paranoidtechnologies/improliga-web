import SiteMenu from 'client/components/static/menu.react';
import {expect} from 'chai';
import {getChildren, render} from 'test/utils';
import React from 'react';

const msg = {};

describe('Site menu', () => {
  it('renders', () => {
    const comp = <SiteMenu msg={{msg}} />;
    const tree = render(comp);

    expect(tree).to.be.an('object');
    expect(tree._store.props.className.split(' ')).to.contain('site-menu');

    const fluid = getChildren(tree);
    expect(fluid).to.be.an('object');
    expect(fluid._store.props.className.split(' ')).to.contain('container-fluid');

    const parts = getChildren(fluid);
    expect(parts).to.be.an('array');

    const header = parts[0];
    const nav = parts[1];
    expect(header._store.props.className.split(' ')).to.contain('navbar-inverse');
    expect(nav._store.props.className.split(' ')).to.contain('navbar-collapse');
  });
});

