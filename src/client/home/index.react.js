import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import Header from './components/header.react';

export default class Index extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <div className="page-home">
        <Header msg={msg} />
      </div>
    );
  }

}
