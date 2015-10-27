import Calendar from 'client/calendar/calendar.react';
import React from 'react';
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

  expect(ren.props).to.be.an('object');
  expect(ren.props.children).to.be.an('array');

  var children = ren.props.children[0];

  expect(children.type).to.equal('div');
  expect(children).to.be.an('object');
  expect(children.props).to.be.an('object');
  expect(children.props.children).to.be.an('array');

  var days = children.props.children;
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
    expect(day).to.be.an('object');
    expect(day.props).to.be.an('object');
    expect(day.props.children).to.be.a('string');
    expect(day.props.children).to.be.equal(str);
  }
};

var testFirstLastDate = function(weekStart, month, first, last) {
  const comp = <Calendar month={moment(month, 'YYYY-MM')} msg={msg} weekStart={weekStart} />;
  const ren = render(comp);

  expect(ren.props.children).to.be.an('array');

  const body = ren.props.children[1];

  expect(body.type).to.equal('div');
  expect(body).to.be.an('object');
  expect(body.props).to.be.an('object');
  expect(body.props.children).to.be.an('array');

  const weeks = body.props.children;
  const firstWeek = weeks[0];
  const lastWeek = weeks[weeks.length - 1];

  expect(firstWeek).to.be.an('object');
  expect(firstWeek.props).to.be.an('object');
  expect(firstWeek.props.date);
  expect(firstWeek.props.date).to.be.an('object');
  expect(firstWeek.props.date.format('YYYY-MM-DD')).to.equal(first);

  expect(lastWeek).to.be.an('object');
  expect(lastWeek.props).to.be.an('object');
  expect(lastWeek.props.date);
  expect(lastWeek.props.date).to.be.an('object');

  let lastDay = lastWeek.props.date.clone().add(6, 'days');
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
