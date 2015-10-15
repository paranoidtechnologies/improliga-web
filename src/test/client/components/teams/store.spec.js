import {expect} from 'chai';
import store from 'client/components/teams/store';
import {actions} from 'client/components/teams/actions';

describe('Team store', () => {
  it('responds to team page browse', () => {
    const firstItem = {
      name: 'foo',
      about: 'bar'
    };

    const payload = {
      'data':[firstItem]
    };

    let res = store(undefined, actions.loadTeamsPage, payload);

    expect(res).to.be.an('object');
    expect(res.list).to.be.an('array');
    expect(res.list.length).to.equal(1);
    expect(res.list[0].name).to.equal(firstItem.name);
    expect(res.list[0].about).to.equal(firstItem.about);
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
