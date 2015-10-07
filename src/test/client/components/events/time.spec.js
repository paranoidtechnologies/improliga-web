import {expect} from 'chai';
import EventTime from 'client/components/events/time.react';
import {render, getInstance} from 'test/utils';
import React from 'react';
import moment from 'moment';
import timeLayouts from 'client/components/events/timeLayouts';

const msg = {};
const formatDate = 'YYYY-MM-DD';
const formatTime = 'HH:mm';

describe('Event time', () => {
  it('renders blank', () => {
    const comp = <EventTime msg={msg} />;
    const res = render(comp);

    expect(res).to.be.an('object');
  });

  it('picks null layout provided no date/time', () => {
    const comp = <EventTime msg={msg} />;
    const inst = getInstance(comp);

    expect(inst.getLayout).to.be.a('function');
    expect(inst.renderLayout).to.be.a('function');
    expect(inst.getLayout()).to.equal(null);
    expect(inst.renderLayout()).to.equal(null);
  });

  it('picks date layout provided start date', () => {
    let comp = <EventTime formatDate={formatDate} msg={msg} start={moment()} />;
    let inst = getInstance(comp);
    let part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('date');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.date);

    comp = <EventTime endTime={moment()} formatDate={formatDate} msg={msg} start={moment()} />;
    inst = getInstance(comp);
    part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('date');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.date);
  });

  it('picks time layout provided start dateTime', () => {
    let comp = <EventTime formatDate={formatDate} formatTime={formatTime} msg={msg} start={moment()} startTime={moment()} />;
    let inst = getInstance(comp);
    let part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('time');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.time);

    comp = <EventTime endTime={moment()} formatDate={formatDate} formatTime={formatTime} msg={msg} start={moment()} startTime={moment()} />;
    inst = getInstance(comp);

    expect(inst.getLayout()).to.equal('time');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.time);
  });

  it('picks dateDuration layout provided start/end date', () => {
    const comp = <EventTime end={moment()} formatDate={formatDate} msg={msg} start={moment()} />;
    const inst = getInstance(comp);
    const part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('dateDuration');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.dateDuration);
  });

  it('picks dateTimeDateDuration layout provided start dateTime and end date', () => {
    const comp = <EventTime end={moment()} formatDate={formatDate} formatTime={formatTime} msg={msg} start={moment()} startTime={moment()} />;
    const inst = getInstance(comp);
    const part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('dateTimeDateDuration');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.dateTimeDateDuration);
  });

  it('picks dateTimeTimeDuration layout provided start dateTime and end dateTime', () => {
    const comp = <EventTime end={moment()} endTime={moment()} formatDate={formatDate} formatTime={formatTime} msg={msg} start={moment()} startTime={moment()} />;
    const inst = getInstance(comp);
    const part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('dateTimeTimeDuration');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.dateTimeTimeDuration);
  });

  it('picks dateTimeDuration layout provided start dateTime and end dateTime', () => {
    const comp = <EventTime end={moment().clone().add(1, 'day')} endTime={moment()} formatDate={formatDate} formatTime={formatTime} msg={msg} start={moment()} startTime={moment()} />;
    const inst = getInstance(comp);
    const part = inst.renderLayout();

    expect(inst.getLayout()).to.equal('dateTimeDuration');
    expect(part).to.be.an('object');
    expect(part.type).to.equal(timeLayouts.dateTimeDuration);
  });
});
