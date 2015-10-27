import {expect} from 'chai';
import {Event, wakeUpEvent} from 'common/events/event';
import moment from 'moment';

const momentConst = moment().constructor;

describe('Event model', () => {
  it('wakeUpEvent empty', () => {
    expect(function() {
      wakeUpEvent(new Event());
    }).to.not.throw();
  });

  it('wakeUpEvent start', () => {
    var res = wakeUpEvent(new Event({
      start: '2015-01-01',
    }));

    expect(res.start).to.be.an.instanceof(momentConst);
    expect(res.start.isValid()).to.equal(true);
    expect(res.start.format('YYYY-MM-DD')).to.equal('2015-01-01');

    res = wakeUpEvent(new Event({
      start: 'asdf'
    }));

    expect(res.start).to.be.an.instanceof(momentConst);
    expect(res.start.isValid()).to.equal(false);
  });

  it('wakeUpEvent end', () => {
    var res = wakeUpEvent(new Event({
      end: '2015-01-01',
    }));

    expect(res.end).to.be.an.instanceof(momentConst);
    expect(res.end.isValid()).to.equal(true);
    expect(res.end.format('YYYY-MM-DD')).to.equal('2015-01-01');

    res = wakeUpEvent(new Event({
      end: 'foo',
    }));

    expect(res.end).to.be.an.instanceof(momentConst);
    expect(res.end.isValid()).to.equal(false);
  });
});
