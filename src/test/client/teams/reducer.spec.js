import {expect} from 'chai';
import store from 'common/teams/reducer';
import {List} from 'immutable';
import {LOAD_TEAMS_PAGE, LOAD_TEAM_DETAIL} from 'common/teams/actions';

describe('Team store', () => {
  it('responds to team page browse', () => {
    const firstItem = {
      name: 'foo',
      desc: 'bar'
    };

    const payload = {
      'data':[firstItem]
    };

    let res = store(undefined, LOAD_TEAMS_PAGE, payload);

    expect(res).to.be.an('object');
    expect(res.list).to.be.an.instanceof(List);
    expect(res.list.size).to.equal(1);

    const first = res.list.get(0);
    expect(first.get('name')).to.equal(firstItem.name);
    expect(first.get('desc')).to.equal(firstItem.desc);
  });

  it('responds to team detail', () => {
    const firstItem = {
      name: 'foo',
      about: 'bar'
    };

    const payload = {
      'data':[firstItem]
    };

    let res = store(undefined, LOAD_TEAM_DETAIL, payload);

    expect(res).to.be.an('object');
    expect(res.detail).to.be.an('object');
    expect(res.detail.name).to.equal(firstItem.name);
    expect(res.detail.about).to.equal(firstItem.about);
  });
});
