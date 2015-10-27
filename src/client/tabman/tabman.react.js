import Component from 'react-pure-render/component';
import React from 'react';
import Button from './button.react';
import Tab from './tab.react';
import './tabman.styl';

export default class Tabman extends Component {
  static propTypes = {
    tabs: React.PropTypes.array.isRequired
  }

  state = {
    active: 0
  }

  itemActivate(index, e) {
    this.setState({
      active:index
    });
  }

  render() {
    const self = this;
    const itemActivate = this.itemActivate;
    const state = this.state;
    const tabs = this.props.tabs;

    return (
      <div className="ui-tabman">
        <div className="row text-center ui-tabman-buttons" ref="buttons">
          {tabs.map(function(tab, key) {
            return (
              <Button
                activate={itemActivate.bind(self, key)}
                active={key === state.active}
                key={key}
                msg={tab.pass.heading}
              />
            );
          })}
        </div>

        <div className="ui-tabman-content" ref="content">
          {tabs.map(function(tab, key) {
            return <Tab active={key === state.active} component={tab.component} key={key} pass={tab.pass} />;
          })}
        </div>
      </div>
    );
  }
};
