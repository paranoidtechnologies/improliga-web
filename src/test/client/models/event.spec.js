import {expect} from 'chai';
import {wakeUpEvent} from 'client/lib/events';
import moment from 'moment';

const momentConst = moment().constructor;

describe('Event model', () => {
  it('wakeUpEvent empty', () => {
    expect(function() {
      wakeUpEvent();
    }).to.throw();

    expect(function() {
      wakeUpEvent({});
    }).to.not.throw();
  });

  it('wakeUpEvent start', () => {
    var res = wakeUpEvent({
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

  it('wakeUpEvent end', () => {
    var res = wakeUpEvent({
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
