import List from 'client/browser/list.react';
import Component from 'react-pure-render/component';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {render} from 'test/utils';

var draw = class Item extends Component {
  render() {
    return <div className="item">item</div>;
  }
};

describe('List', () => {
  it('require some props', () => {
    const comp = <List draw={draw} items={[]} />;

    var res = render(comp);

    expect(TestUtils.isElement(res)).to.equal(true);

  });
});
