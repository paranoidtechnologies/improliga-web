import {expect} from 'chai';
import {Event} from 'common/events/event';
import eventsReducer from 'common/events/reducer';
import {actions} from 'common/events/actions';

describe('Event reducer', () => {
  it('responds to event detail', () => {
    const payload = [
      new Event({
        name: 'foo'
      })
    ];

    let res = eventsReducer(undefined, actions.loadEventDetail, payload);
    expect(res).to.be.an('object');
    expect(res.detail).to.be.an('object');
    expect(res.detail.name).to.equal('foo');
  });
});
