import {urls} from 'client/routeMap';
import Crossing from 'crossing';
import {expect} from 'chai';

describe('Route config', () => {
  it('renders ok', () => {
    expect(urls).to.be.an.instanceOf(Crossing);
  });
});
