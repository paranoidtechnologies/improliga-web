import {expect} from 'chai';
import store from 'client/components/events/store';
import {actions} from 'client/components/events/actions';

describe('Event store', () => {
  it('responds to event detail', () => {
    const payload = {
      list: [
        {
          name: 'foo'
        }
      ]
    };

    let res = store(undefined, actions.loadEventDetail, payload);
    expect(res).to.be.an('object');
    expect(res.detail).to.be.an('object');
    expect(res.detail.name).to.equal('foo');
  });
});
