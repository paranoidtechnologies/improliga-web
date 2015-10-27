import {expect} from 'chai';
import store from 'common/shows/reducer';
import {List, Record} from 'immutable';

describe('Show store', () => {
  it('stores default', () => {
    let res = store();

    expect(res).to.be.an.instanceof(Record);
    expect(res.list).to.be.an.instanceof(List);
    expect(res.list.size).to.equal(0);
    expect(res.calendar).to.be.an.instanceof(List);
    expect(res.calendar.size).to.equal(0);
  });
});
