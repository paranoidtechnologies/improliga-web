import React from 'react';
import Component from '../component.react';

export default class Day extends Component {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    items: React.PropTypes.array,
    msg: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    items: []
  }

  render() {
    return (
      <div className="ui-calendar-day" data-date={date.format('YYYY-MM-DD')}>
        {date.format('D')}
      </div>
    );
  }
}
