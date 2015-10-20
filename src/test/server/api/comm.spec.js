import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import Comm from 'server/api/comm';

chai.use(chaiImmutable);

describe('filters', () => {

  it('shows', () => {
    expect(Comm).to.be.an('object');
  });
});
