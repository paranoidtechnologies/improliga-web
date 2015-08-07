import List from 'client/components/browser/list.react';
import Component from 'client/components/component.react';
import React from 'react/addons';
import {expect} from 'chai';
import {render} from 'test/utils';

var draw = class Item extends Component {
  render() {
    return <div className="item">item</div>;
  }
}

describe('List', () => {
  it('require some props', () => {
    const comp = <List draw={draw} items={[]} />;

    var res = render(comp);

    expect(React.addons.TestUtils.isElement(res)).to.equal(true);

  });
});
