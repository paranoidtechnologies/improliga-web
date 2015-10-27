import Day from 'client/calendar/day.react';
import React from 'react';
import {expect} from 'chai';
import {render} from 'test/utils';
import moment from 'moment';

const msg = {};
const today = moment();
const days = [];

const start = moment('2016-01', 'YYYY-MM');
let cur = start.clone();

while (cur.isSame(start, 'month')) {
  days.push(cur.clone());
  cur.add(1, 'day');
}

describe('Calendar day', () => {
  it('render empty', () => {
    days.forEach((today) => {
      const comp = <Day date={today} msg={msg} />;
      const ren = render(comp);

      expect(ren.props).to.be.an('object');
      expect(ren.props.children).to.be.an('object');

      const wrap = ren.props.children;

      expect(wrap).to.be.an('object');
      expect(wrap.props).to.be.an('object');
      expect(wrap.props.children).to.be.an('array');

      const dayNumber = wrap.props.children[0];
      const events = wrap.props.children[1];

      expect(dayNumber).to.be.an('object');
      expect(dayNumber.props).to.be.an('object');
      expect(dayNumber.props.children).to.equal(today.format('D'));

      expect(events).to.be.an('object');
      expect(events.props).to.be.an('object');
      expect(events.props.children).to.be.an('array');
      expect(events.props.children.length).to.equal(0);
    });
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

    expect(ren.props).to.be.an('object');
    expect(ren.props.children).to.be.an('object');

    const wrap = ren.props.children;

    expect(wrap.props).to.be.an('object');
    expect(wrap.props.children).to.be.an('array');

    const events = wrap.props.children[1];

    expect(events.props).to.be.an('object');
    expect(events.props.children).to.be.an('array');
    expect(events.props.children.length).to.equal(2);
  });
});
