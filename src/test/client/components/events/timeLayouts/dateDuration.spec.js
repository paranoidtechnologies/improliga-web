import {expect} from 'chai';
import {render, getChildren} from 'test/utils';
import React from 'react';
import moment from 'moment';
import EventLayoutDateDuration from 'client/components/events/time/dateDuration.react';

const msg = {};
const formatDateTime = 'YYYY-MM-DD-T-HH:mm:ss';
const formatDate = 'YYYY-MM-DD';
const formatTime = 'HH:mm:ss';
const start = moment('2015-09-01T15:23:11', formatDateTime);
const end = moment('2015-09-02T19:23:11', formatDateTime);

describe('Event datetime-date duration layout', () => {
  it('renders', () => {
    const props = {
      end: end,
      formatDate: formatDate,
      formatTime: formatTime,
      msg: {},
      start: start,
      startTime: start,
    };
    const comp = <EventLayoutDateDuration {...props} />;
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

    expect(getChildren(elStart)).to.be.an('object');
    expect(getChildren(elEnd)).to.be.an('object');

    const elStartDate = getChildren(elStart);
    const elEndDate = getChildren(elEnd);

    expect(elStartDate).to.be.an('object');
    expect(elEndDate).to.be.an('object');

    expect(elStartDate.props.className.split(' ')).to.contain('start-date');
    expect(elEndDate.props.className.split(' ')).to.contain('end-date');

    expect(getChildren(elStartDate)).to.equal(start.format(formatDate));
    expect(getChildren(elEndDate)).to.equal(end.format(formatDate));
  });
});
