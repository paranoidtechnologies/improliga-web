import {expect} from 'chai';
import store from 'client/components/teams/store';
import {List} from 'immutable';
import {actions} from 'client/components/teams/actions';

describe('Team store', () => {
  it('responds to team page browse', () => {
    const firstItem = {
      name: 'foo',
      desc: 'bar'
    };

    const payload = {
      'data':[firstItem]
    };

    let res = store(undefined, actions.loadTeamsPage, payload);

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

    let res = store(undefined, actions.loadTeamDetail, payload);

    expect(res).to.be.an('object');
    expect(res.detail).to.be.an('object');
    expect(res.detail.name).to.equal(firstItem.name);
    expect(res.detail.about).to.equal(firstItem.about);
  });
});
