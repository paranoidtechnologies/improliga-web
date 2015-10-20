import SiteMenu from 'client/components/static/menu.react';
import {expect} from 'chai';
import {getChildren, render} from 'test/utils';
import React from 'react';

const msg = {};

describe('Site menu', () => {
  it('renders', () => {
    const comp = <SiteMenu msg={{msg}} />;
    const tree = render(comp);

    //~ expect(tree).to.be.an('object');
    //~ expect(tree._store.props.className.split(' ')).to.contain('site-menu');
//~
    //~ const center = getChildren(tree);
    //~ expect(center).to.be.an('object');
    //~ expect(center._store.props.className.split(' ')).to.contain('site-menu-center');
//~
    //~ const inner = getChildren(center);
    //~ expect(inner).to.be.an('object');
    //~ expect(inner._store.props.className.split(' ')).to.contain('site-menu-inner');

    //~ const listItems = getChildren(inner);
    //~ expect(listItems).to.be.an('array');
    //~ expect(listItems.length).to.equal(7);
  });
});
