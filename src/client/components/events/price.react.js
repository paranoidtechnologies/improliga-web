import React from 'react';
import Component from '../component.react';
import './location.styl';

export default class eventPrice extends Component {
  static propTypes = {
    msg: React.PropTypes.object,
    price: React.PropTypes.number,
    priceStudent: React.PropTypes.number,
  }

  static defaultProps = {
    price: null,
    priceStudent: null,
  }

  render() {
    const {msg, price, priceStudent} = this.props;
    let elPrice = null;
    let elPriceStudent = null;

    if (!isNaN(price)) {
      elPrice = (<div className="price-normal">
        <span class="value">{price ? price:msg.free}</span>
        {price ? <span class="unit"> Kč</span>:null}
      </div>);
    }

    if (!isNaN(priceStudent)) {
      elPriceStudent = (<div className="price-student">
        <span class="value">{priceStudent ? priceStudent:msg.free}</span>
        {priceStudent ? <span class="unit"> Kč</span>:null}
      </div>);
    }

    return (<div className="event-info-item event-price">
      {elPrice}
      {elPriceStudent}
    </div>);
  }
}
