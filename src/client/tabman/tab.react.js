import Component from 'react-pure-render/component';
import React from 'react';

export default class Tab extends Component {
  static propTypes = {
    active: React.PropTypes.bool,
    component: React.PropTypes.any.isRequired,
    pass: React.PropTypes.object.isRequired
  }

  render() {
    var comp = React.createElement(this.props.component, this.props.pass);
    var cname = ['ui-tabman-tab'];

    if (this.props.active) {
      cname.push('active');
    }

    return (
      <div className={cname.join(' ')}>
        {comp}
      </div>
    );
  }
};
