import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import moment from 'moment';
import {getFilters} from 'server/api/events/shows/filters';

chai.use(chaiImmutable);

describe('filters', () => {
  const dateFormat = 'YYYY-MM-DD';

  it('shows', () => {
    const today = moment();
    const invalid = moment('asdf', 'YYYY-mm');
    var result = getFilters();

    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('object');
    expect(result[0].attr).to.equal('visibility');
    expect(result[0].type).to.equal('exact');
    expect(result[0].exact).to.equal(4);
    expect(result[1]).to.be.an('undefined');

    result = getFilters(today);

    expect(result).to.be.an('array');
    expect(result[1]).to.be.an('object');
    expect(result[1].type).to.equal('or');
    expect(result[1].or).to.be.an('array');
    expect(result[1].or[0]).to.be.an('object');
    expect(result[1].or[0].type).to.equal('and');
    expect(result[1].or[0].and).to.be.an('array');
    expect(result[1].or[0].and[0]).to.be.an('object');
    expect(result[1].or[0].and[0].type).to.equal('gte');
    expect(result[1].or[0].and[0].gte).to.equal(today.startOf('month').format(dateFormat));
    expect(result[1].or[0].and[1]).to.be.an('object');
    expect(result[1].or[0].and[1].type).to.equal('lt');
    expect(result[1].or[0].and[1].lt).to.equal(today.endOf('month').format(dateFormat));
    expect(result[1].or[1]).to.be.an('object');
    expect(result[1].or[1].type).to.equal('and');
    expect(result[1].or[1].and).to.be.an('array');
    expect(result[1].or[1].and[0]).to.be.an('object');
    expect(result[1].or[1].and[0].type).to.equal('gte');
    expect(result[1].or[1].and[0].gte).to.equal(today.startOf('month').format(dateFormat));
    expect(result[1].or[1].and[1]).to.be.an('object');
    expect(result[1].or[1].and[1].type).to.equal('lt');
    expect(result[1].or[1].and[1].lt).to.equal(today.endOf('month').format(dateFormat));

    expect(function() {
      getFilters(invalid);
    }).to.throw();
  });
});
