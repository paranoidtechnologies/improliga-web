import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import Comm from 'server/api/comm';

chai.use(chaiImmutable);

describe('API comm', () => {

  it('has interface', () => {
    expect(Comm.get).to.be.a('function');
  });
});
