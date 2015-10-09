import React from 'react';
import Component from '../component.react';
import './price.styl';

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
        <span className="level">{msg.normal + ': '}</span>
        <span className="value">{price ? price : msg.free}</span>
        {price ? <span className="unit"> {msg.crowns}</span> : null}
      </div>);
    }

    if (!isNaN(priceStudent)) {
      elPriceStudent = (<div className="price-student">
        <span className="level">{msg.student + ': '}</span>
        <span className="value">{priceStudent ? priceStudent : msg.free}</span>
        {priceStudent ? <span className="unit"> {msg.crowns}</span> : null}
      </div>);
    }

    return (<div className="event-info-item event-price">
      <div className="col-sm-4 event-info-label price-label">{msg.ticketPrice}</div>
      <div className="col-sm-8 price-levels">
      {elPrice}
      {elPriceStudent}
      </div>
    </div>);
  }
}
