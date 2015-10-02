import Api from 'client/api';
import {expect} from 'chai';
import moment from 'moment';

const momentConst = moment().constructor;

describe('Api', () => {
  it('interface', () => {
    const mock = new Api();

    expect(mock.fetch).to.be.an('function');
    expect(mock.error).to.be.an('function');
  });

  it('model wakeup', () => {
    const mock = new Api();
    var res, keys;

    res = mock.wakeUp({
      arg_test: 1,
      long_arg_test_x: 2,
      created_at: '2015-01-01T12:42:12+02:00',
      updated_at: '2015-05-01T12:12:42+04:00'
    });

    keys = Object.keys(res);

    expect(res).to.be.an('object');

    expect(keys[0]).to.equal('argTest');
    expect(keys[1]).to.equal('longArgTestX');
    expect(keys[2]).to.equal('createdAt');
    expect(keys[3]).to.equal('updatedAt');

    expect(res.argTest).to.equal(1);
    expect(res.longArgTestX).to.equal(2);

    res.createdAt.utc();
    res.updatedAt.utc();

    expect(res.createdAt).to.be.an.instanceof(momentConst);
    expect(res.updatedAt).to.be.an.instanceof(momentConst);

    expect(res.createdAt.format('YYYY')).to.equal('2015');
    expect(res.createdAt.format('MM')).to.equal('01');
    expect(res.createdAt.format('DD')).to.equal('01');
    expect(res.createdAt.format('HH')).to.equal('10');
    expect(res.createdAt.format('mm')).to.equal('42');
    expect(res.createdAt.format('ss')).to.equal('12');

    expect(res.updatedAt.format('YYYY')).to.equal('2015');
    expect(res.updatedAt.format('MM')).to.equal('05');
    expect(res.updatedAt.format('DD')).to.equal('01');
    expect(res.updatedAt.format('HH')).to.equal('08');
    expect(res.updatedAt.format('mm')).to.equal('12');
    expect(res.updatedAt.format('ss')).to.equal('42');

  });
});
