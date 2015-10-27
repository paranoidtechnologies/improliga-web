import {expect} from 'chai';
import EventPrice from 'client/components/events/price.react';
import {render, getChildren} from 'test/utils';
import React from 'react';

const msg = {
  free: 'free',
  normal: 'normal',
  student: 'student'
};

describe('Event price', () => {
  it('renders default layout', () => {
    const props = {
      msg: msg,
      price: 80,
      priceStudent: 60,
    };
    const comp = <EventPrice {...props} />;
    const ren = render(comp);

    const cont = getChildren(getChildren(ren)[1]);

    expect(cont).to.be.an('array');
    expect(cont.length).to.equal(2);

    const price = cont[0];
    const priceStudent = cont[1];

    const priceLabels = getChildren(price);
    expect(priceLabels).to.be.an('array');
    expect(priceLabels.length).to.equal(3);
    expect(priceLabels[0]).to.be.an('object');
    expect(getChildren(priceLabels[0])).to.equal(msg.normal + ': ');
    expect(priceLabels[1]).to.be.an('object');
    expect(getChildren(priceLabels[1])).to.equal(80);

    const priceStudentLabels = getChildren(priceStudent);
    expect(priceStudentLabels).to.be.an('array');
    expect(priceStudentLabels.length).equal(3);
    expect(priceStudentLabels[0]).to.be.an('object');
    expect(getChildren(priceStudentLabels[0])).to.equal(msg.student + ': ');
    expect(priceStudentLabels[1]).to.be.an('object');
    expect(getChildren(priceStudentLabels[1])).to.equal(60);
  });

  it('renders free', () => {
    const props = {
      msg: msg,
      price: 0,
      priceStudent: 0
    };
    const comp = <EventPrice {...props} />;
    const ren = render(comp);
    const cont = getChildren(getChildren(ren)[1]);

    const priceLabels = getChildren(cont[0]);
    const priceStudentLabels = getChildren(cont[1]);

    expect(getChildren(priceLabels[1])).to.equal(msg.free);
    expect(getChildren(priceStudentLabels[1])).to.equal(msg.free);
  });
});
