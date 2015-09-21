import Component from '../component.react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';

export default class Day extends Component {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    items: React.PropTypes.oneOfType([
      React.PropTypes.array,
      ImmutablePropTypes.list
    ]),
    month: React.PropTypes.object,
    msg: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    items: []
  }

  render() {
    const {date, items, month, msg} = this.props;
    let cname = ['cal-month-day'];

    if (month) {
      if (date.isSame(month, 'month')) {
        cname.push('cal-day-inmonth');
      } else {
        cname.push('cal-day-outmonth');
      }
    }

    return (
      <div className="cal-cell1 cal-cell">
        <div className={cname.join(' ')} data-date={date.format('YYYY-MM-DD')}>
          <span className="pull-right">{date.format('D')}</span>
        </div>
      </div>
    );
  }
}