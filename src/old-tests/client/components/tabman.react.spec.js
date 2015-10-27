import Tabman from 'client/components/tabman.react';
import React from 'react';
import {expect} from 'chai';
import {render} from 'test/utils';

describe('Tabman', () => {
  it('should render default view', () => {
    const comp = <Tabman tabs={[]} />;
    render(comp);

    expect(comp.props.tabs.length).to.equal(0);
  });
});
