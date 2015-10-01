import Api from 'client/api';
import {expect} from 'chai';

describe('Api', () => {
  it('interface', () => {
    const mock = new Api();

    expect(mock.fetch).to.be.an('function');
    expect(mock.error).to.be.an('function');
  });
});
