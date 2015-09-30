import React from 'react/addons';
import {expect} from 'chai';
import {render} from 'test/utils';
import {actions, feature} from 'client/pages/home/shows/actions';
import store, {wakeUpEvent} from 'client/pages/home/shows/store';
import {List, Record} from 'immutable';
import moment from 'moment';

const momentConst = moment().__proto__.constructor;

describe('Pages, Home, Shows', () => {
  it('store default', () => {
    let res = store();

    expect(feature).to.equal('shows');
    expect(res).to.be.an.instanceof(Record);
    expect(res.list).to.be.an.instanceof(List);
    expect(res.list.size).to.equal(0);
  });

  it('store wakeUpEvent empty', () => {
    var res;

    expect(function() {
      wakeUpEvent();
    }).to.throw();

    expect(function() {
      wakeUpEvent({});
    }).to.not.throw();
  });

  it('store wakeUpEvent start', () => {

    res = wakeUpEvent({
      start: '2015-01-01',
    });

    expect(res.start).to.be.an.instanceof(momentConst);
    expect(res.start.isValid()).to.equal(true);
    expect(res.start.format('YYYY-MM-DD')).to.equal('2015-01-01');

    res = wakeUpEvent({
      start: 'asdf'
    });

    expect(res.start).to.be.an.instanceof(momentConst);
    expect(res.start.isValid()).to.equal(false);
  });

  it('store wakeUpEvent end', () => {

    res = wakeUpEvent({
      end: '2015-01-01',
    });

    expect(res.end).to.be.an.instanceof(momentConst);
    expect(res.end.isValid()).to.equal(true);
    expect(res.end.format('YYYY-MM-DD')).to.equal('2015-01-01');

    res = wakeUpEvent({
      end: 'foo',
    });

    expect(res.end).to.be.an.instanceof(momentConst);
    expect(res.end.isValid()).to.equal(false);
  });
});
