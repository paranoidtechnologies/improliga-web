import Calendar from 'client/components/calendar.react';
import React from 'react/addons';
import moment from 'moment';
import {expect} from 'chai';
import {render} from 'test/utils';

const msg = {
  day1: 'mon',
  day2: 'tue',
  day3: 'wed',
  day4: 'thu',
  day5: 'fri',
  day6: 'sat',
  day7: 'sun'
};

var testHeadDayStart = function(weekStart) {
  const comp = <Calendar msg={msg} weekStart={weekStart} />;
  const ren = render(comp);

  expect(ren._store).to.be.an('object');
  expect(ren._store.props).to.be.an('object');
  expect(ren._store.props.children).to.be.an('array');

  var children = ren._store.props.children[0];

  expect(children.type).to.equal('div');
  expect(children._store).to.be.an('object');
  expect(children._store.props).to.be.an('object');
  expect(children._store.props.children).to.be.an('array');

  var days = children._store.props.children;
  expect(days.length).to.equal(7);

  for (let i = 0; i < 7; i++) {
    let day = days[i];
    let num = weekStart + i;

    if (num > 7 || num < 1) {
      num = num - 7;
    }

    let str = msg['day' + num];

    expect(str);
    expect(day.type).to.equal('div');
    expect(day._store).to.be.an('object');
    expect(day._store.props).to.be.an('object');
    expect(day._store.props.children).to.be.a('string');
    expect(day._store.props.children).to.be.equal(str);
  }
};

var testFirstLastDate = function(weekStart, month, first, last) {
  const comp = <Calendar month={moment(month, 'YYYY-MM')} msg={msg} weekStart={weekStart} />;
  const ren = render(comp);

  expect(ren._store.props.children).to.be.an('array');

  const body = ren._store.props.children[1];

  expect(body.type).to.equal('div');
  expect(body._store).to.be.an('object');
  expect(body._store.props).to.be.an('object');
  expect(body._store.props.children).to.be.an('array');

  const weeks = body._store.props.children;
  const firstWeek = weeks[0];
  const lastWeek = weeks[weeks.length - 1];

  expect(firstWeek._store).to.be.an('object');
  expect(firstWeek._store.props).to.be.an('object');
  expect(firstWeek._store.props.date);
  expect(firstWeek._store.props.date).to.be.an('object');
  expect(firstWeek._store.props.date.format('YYYY-MM-DD')).to.equal(first);

  expect(lastWeek._store).to.be.an('object');
  expect(lastWeek._store.props).to.be.an('object');
  expect(lastWeek._store.props.date);
  expect(lastWeek._store.props.date).to.be.an('object');

  let lastDay = lastWeek._store.props.date.clone().add(6, 'days');
  expect(lastDay.format('YYYY-MM-DD')).to.equal(last);
};


describe('Calendar', () => {
  it('render week days in proper order', () => {
    for (let i = 1; i < 8; i++) {
      testHeadDayStart(i);
    }
  });

  it('first/last calendar day', () => {
    const testDates = [
      {
        first: '2015-08-31',
        last: '2015-10-04',
        month: '2015-09',
        weekStart: 1
      },
      {
        first: '2015-07-27',
        last: '2015-09-06',
        month: '2015-08',
        weekStart: 1
      },
      {
        first: '2015-06-29',
        last: '2015-08-02',
        month: '2015-07',
        weekStart: 1
      },
      {
        first: '2015-06-01',
        last: '2015-07-05',
        month: '2015-06',
        weekStart: 1
      }
    ];

    testDates.forEach(function(item) {
      testFirstLastDate(item.weekStart, item.month, item.first, item.last);
    });
  });
});
