import React from 'react';
import Component from '../../components/component.react';
import ShowsBrowser from '../shows/browser';
import './shows.styl';

export default class Shows extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired
  }

  render() {
    const {
      msg: {home: msg},
      actions: actions,
      shows: shows
    } = this.props;

    return (
      <div className="ui-section structure-el-parallax ui-section-shows">
        <div className="ui-section-inner-wrapper">
          <ShowsBrowser actions={actions} items={shows.list} msg={msg} />
        </div>
      </div>
    );
  }
};

