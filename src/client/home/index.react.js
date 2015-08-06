import Component from '../components/component.react';
import React from 'react';
import Header from './components/header.react';
import About from './components/about.react';

export default class Index extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <div className="page-home">
        <Header msg={msg} />
        <About msg={msg} />
      </div>
    );
  }

}

