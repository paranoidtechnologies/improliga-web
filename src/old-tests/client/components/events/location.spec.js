import {expect} from 'chai';
import EventLocation from 'client/components/events/location.react';
import {render, getChildren} from 'test/utils';
import React from 'react';

const msg = {};

describe('Event location', () => {
  it('renders default', () => {
    const props = {
      addr: 'foo address',
      msg: msg,
      name: 'foo location',
      site: 'http://foo.bar',
    };
    const comp = <EventLocation {...props} />;
    const ren = render(comp);

    expect(ren).to.be.an('object');
    expect(ren.props.className.split(' ')).to.contain('event-location');

    const cont = getChildren(ren);
    expect(cont).to.be.an('array');
    expect(cont.length).to.equal(3);

    const name = cont[0];
    const addr = cont[1];
    const site = cont[2];

    expect(name).to.be.an('object');
    expect(addr).to.be.an('object');
    expect(site).to.be.an('object');

    expect(name.props.className.split(' ')).to.contain('location-name');
    expect(getChildren(name)).to.equal(props.name);

    expect(addr.props.className.split(' ')).to.contain('location-addr');
    expect(getChildren(addr)).to.equal(props.addr);

    expect(site.props.className.split(' ')).to.contain('location-site');
    expect(getChildren(site)).to.be.an('object');

    const link = getChildren(site);
    expect(link.props.href).to.equal(props.site);
    expect(getChildren(link)).to.equal(props.site);
  });

  it('hides site if empty', () => {
    const props = {
      addr: 'foo address',
      msg: msg,
      name: 'foo location'
    };
    const comp = <EventLocation {...props} />;
    const ren = render(comp);
    const cont = getChildren(ren);

    expect(cont).to.be.an('array');
    cont.forEach(function(item) {
      if (item) {
        const cname = item.props.className.split(' ');
        expect(cname).to.not.contain('location-site');
      }
    });
  });
});
