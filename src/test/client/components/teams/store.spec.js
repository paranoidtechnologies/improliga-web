import {expect} from 'chai';
import store from 'client/components/teams/store';
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
    expect(res.list).to.be.an('array');
    expect(res.list.length).to.equal(1);
    expect(res.list[0].name).to.equal(firstItem.name);
    expect(res.list[0].desc).to.equal(firstItem.desc);
  });
});
