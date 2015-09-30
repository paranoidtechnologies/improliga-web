import Day from 'client/components/calendar/day.react';
import React from 'react/addons';
import {expect} from 'chai';
import {render} from 'test/utils';
import moment from 'moment';

const msg = {};
const today = moment();

describe('Calendar day', () => {
  it('render empty', () => {
    const comp = <Day date={today} msg={msg} />;
    const ren = render(comp);

    expect(ren._store).to.be.an('object');
    expect(ren._store.props).to.be.an('object');
    expect(ren._store.props.children).to.be.an('object');

    const wrap = ren._store.props.children;

    expect(wrap._store).to.be.an('object');
    expect(wrap._store.props).to.be.an('object');
    expect(wrap._store.props.children).to.be.an('array');

    const dayNumber = wrap._store.props.children[0];
    const events = wrap._store.props.children[1];

    expect(dayNumber._store).to.be.an('object');
    expect(dayNumber._store.props).to.be.an('object');
    expect(dayNumber._store.props.children).to.equal(today.format('DD'));

    expect(events._store).to.be.an('object');
    expect(events._store.props).to.be.an('object');
    expect(events._store.props.children).to.be.an('array');
    expect(events._store.props.children.length).to.equal(0);
  });

  it('render items', () => {
    const items = [
      {
        id: 1,
        name: 'foo'
      },
      {
        id: 2,
        name: 'bar'
      }
    ];

    const comp = <Day date={today} items={items} msg={msg} />;
    const ren = render(comp);

    expect(ren._store).to.be.an('object');
    expect(ren._store.props).to.be.an('object');
    expect(ren._store.props.children).to.be.an('object');

    const wrap = ren._store.props.children;

    expect(wrap._store).to.be.an('object');
    expect(wrap._store.props).to.be.an('object');
    expect(wrap._store.props.children).to.be.an('array');

    const events = wrap._store.props.children[1];

    expect(events._store).to.be.an('object');
    expect(events._store.props).to.be.an('object');
    expect(events._store.props.children).to.be.an('array');
    expect(events._store.props.children.length).to.equal(2);
  });
});
