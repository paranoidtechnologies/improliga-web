import React from 'react/addons';
import {expect} from 'chai';
import store from 'client/components/events/store';
import {actions} from 'client/components/events/actions';

describe('Events store', () => {
  it('triggers event detail', () => {
    expect(actions.loadEventDetail).to.be.an('function');
  });
});
