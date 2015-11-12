import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import Link from '../static/link.react';

const {object} = PropTypes;

export default class NotFound extends Component {

  static propTypes = {
    intl: object,
    msg: object,
  }

  render() {
    const {intl, msg} = this.props;
    const lang = intl.selectedLanguage;

    return (
      <DocumentTitle title={msg.notFound.title}>
        <div className="ui-page notfound-page">
          <h1>{msg.notFound.header}</h1>
          <p>{msg.notFound.message}</p>
          <Link lang={lang} to="home">{msg.notFound.continueMessage}</Link>
        </div>
      </DocumentTitle>
    );
  }

}
