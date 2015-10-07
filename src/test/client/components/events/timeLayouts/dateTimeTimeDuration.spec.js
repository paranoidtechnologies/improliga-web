import {expect} from 'chai';
import {render, getChildren} from 'test/utils';
import React from 'react';
import moment from 'moment';
import EventLayoutDateTimeTimeDuration from 'client/components/events/time/dateTimeTimeDuration.react';

const msg = {};
const formatDateTime = 'YYYY-MM-DD-T-HH:mm:ss';
const formatDate = 'YYYY-MM-DD';
const formatTime = 'HH:mm:ss';
const start = moment('2015-09-01T15:23:11', formatDateTime);
const end = moment('2015-09-02T19:23:11', formatDateTime);

describe('Event datetime-time duration layout', () => {
  it('renders', () => {
    const props = {
      endTime: end,
      formatDate: formatDate,
      formatTime: formatTime,
      msg: {},
      start: start,
      startTime: start,
    };
    const comp = <EventLayoutDateTimeTimeDuration {...props} />;
    const res = render(comp);

    expect(res).to.be.an('object');

    const cont = getChildren(res);
    expect(cont).to.be.an('array');

    const elStart = cont[0];
    const elSep = cont[1];
    const elEnd = cont[2];

    expect(elStart).to.be.an('object');
    expect(elSep).to.be.an('object');
    expect(elEnd).to.be.an('object');

    expect(elStart.props.className.split(' ')).to.contain('event-start');
    expect(elEnd.props.className.split(' ')).to.contain('event-end');

    expect(getChildren(elStart).length).to.equal(2);
    expect(getChildren(elEnd)).to.be.an('object');

    const elStartDate = getChildren(elStart)[0];
    const elStartTime = getChildren(elStart)[1];
    const elEndTime = getChildren(elEnd);

    expect(elStartDate).to.be.an('object');
    expect(elStartTime).to.be.an('object');
    expect(elEndTime).to.be.an('object');

    expect(elStartDate.props.className.split(' ')).to.contain('start-date');
    expect(elStartTime.props.className.split(' ')).to.contain('start-time');
    expect(elEndTime.props.className.split(' ')).to.contain('end-time');

    expect(getChildren(elStartDate)).to.equal(start.format(formatDate));
    expect(getChildren(elStartTime)).to.equal(start.format(formatTime));
    expect(getChildren(elEndTime)).to.equal(end.format(formatTime));
  });
});
