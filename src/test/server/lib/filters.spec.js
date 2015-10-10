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
    expect(result[1]).to.be.an('object');
    expect(result[2]).to.be.an('undefined');

    result = getFilters(today);

    expect(result).to.be.an('array');
    expect(result[2]).to.be.an('object');
    expect(result[2].type).to.equal('or');
    expect(result[2].or).to.be.an('array');

    const resStart = result[2].or[0];
    const resEnd = result[2].or[1];

    expect(resStart).to.be.an('object');
    expect(resStart.type).to.equal('and');
    expect(resStart.and).to.be.an('array');
    expect(resStart.and[0]).to.be.an('object');
    expect(resStart.and[0].type).to.equal('gte');
    expect(resStart.and[0].gte).to.equal(today.startOf('month').format(dateFormat));
    expect(resStart.and[1]).to.be.an('object');
    expect(resStart.and[1].type).to.equal('lt');
    expect(resStart.and[1].lt).to.equal(today.endOf('month').format(dateFormat));
    expect(resEnd).to.be.an('object');
    expect(resEnd.type).to.equal('and');
    expect(resEnd.and).to.be.an('array');
    expect(resEnd.and[0]).to.be.an('object');
    expect(resEnd.and[0].type).to.equal('gte');
    expect(resEnd.and[0].gte).to.equal(today.startOf('month').format(dateFormat));
    expect(resEnd.and[1]).to.be.an('object');
    expect(resEnd.and[1].type).to.equal('lt');
    expect(resEnd.and[1].lt).to.equal(today.endOf('month').format(dateFormat));

    expect(function() {
      getFilters(invalid);
    }).to.throw();
  });
});
