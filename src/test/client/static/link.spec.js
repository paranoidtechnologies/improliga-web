import Link from 'client/static/link.react';
import React from 'react';
import {expect} from 'chai';
import {render} from 'test/utils';

describe('Router link', () => {
  it('can be created', () => {
    const comp = <Link lang="cs" to="about">test</Link>;
    const ren = render(comp);

    expect(ren).to.be.an('object');
  });
});
