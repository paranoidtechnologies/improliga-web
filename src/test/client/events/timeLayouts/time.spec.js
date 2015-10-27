import {expect} from 'chai';
import {render, getChildren} from 'test/utils';
import React from 'react';
import moment from 'moment';
import EventLayoutTime from 'client/events/time/time.react';

const formatDateTime = 'YYYY-MM-DD-T-HH:mm:ss';
const formatDate = 'YYYY-MM-DD';
const formatTime = 'HH:mm:ss';
const start = moment('2015-09-01T15:23:11', formatDateTime);

describe('Event time layout', () => {
  it('renders', () => {
    const props = {
      formatDate: formatDate,
      formatTime: formatTime,
      start: start,
      startTime: start,
    };
    const comp = <EventLayoutTime {...props} />;
    const res = render(comp);

    expect(res).to.be.an('object');

    const elStart = getChildren(res);
    expect(elStart).to.be.an('object');
    expect(elStart.props.className.split(' ')).to.contain('event-start');
    expect(getChildren(elStart).length).to.equal(2);

    const elStartDate = getChildren(elStart)[0];
    const elStartTime = getChildren(elStart)[1];

    expect(elStartDate).to.be.an('object');
    expect(elStartTime).to.be.an('object');

    expect(elStartDate.props.className.split(' ')).to.contain('start-date');
    expect(elStartTime.props.className.split(' ')).to.contain('start-time');

    expect(getChildren(elStartDate)).to.equal(start.format(formatDate));
    expect(getChildren(elStartTime)).to.equal(start.format(formatTime));
  });
});
