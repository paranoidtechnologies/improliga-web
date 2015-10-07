import {expect} from 'chai';
import {render, getChildren} from 'test/utils';
import React from 'react';
import moment from 'moment';
import EventLayoutDate from 'client/components/events/time/date.react';

const msg = {};
const formatDateTime = 'YYYY-MM-DD-T-HH:mm:ss';
const formatDate = 'YYYY-MM-DD';
const formatTime = 'HH:mm:ss';
const start = moment('2015-09-01T15:23:11', formatDateTime);
const end = moment('2015-09-02T19:23:11', formatDateTime);

describe('Event date layout', () => {
  it('renders', () => {
    const props = {
      formatDate: formatDate,
      msg: {},
      start: start,
    };
    const comp = <EventLayoutDate {...props} />;
    const res = render(comp);

    expect(res).to.be.an('object');

    const elStart = getChildren(res);
    expect(elStart).to.be.an('object');
    expect(elStart.props.className.split(' ')).to.contain('event-start');
    expect(getChildren(elStart)).to.be.an('object');

    const elStartDate = getChildren(elStart);
    expect(elStartDate).to.be.an('object');
    expect(elStartDate.props.className.split(' ')).to.contain('start-date');
    expect(getChildren(elStartDate)).to.equal(start.format(formatDate));
  });
});
