import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import * as Comm from 'server/api/comm';

chai.use(chaiImmutable);

describe('Api comm', () => {

  it('has fudjan like interface', () => {
    expect(Comm.browse).to.be.a('function');
    expect(Comm.create).to.be.a('function');
    expect(Comm.drop).to.be.a('function');
    expect(Comm.edit).to.be.a('function');
  });

  it('purify returns default params', () => {
    expect(Comm.purify).to.be.a('function');

    expect(function() {
      Comm.purify();
    }).to.throw;

    let res = Comm.purify({
      url: 'test'
    });

    expect(res).to.be.an('object');
    expect(res.page).to.equal(0);
    expect(res.perPage).to.equal(20);
    expect(res.query).to.be.an('object');

    expect(res.query.filters).to.be.an('undefined');
    expect(res.query.join).to.be.an('undefined');
    expect(res.query.page).to.equal(0);
    expect(res.query.per_page).to.equal(20);
    expect(res.query.sort).to.be.an('undefined');
  });
});
