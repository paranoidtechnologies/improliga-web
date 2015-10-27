import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import Link from '../static/link.react';

export default class NotFound extends Component {

  static propTypes = {
    lang: PropTypes.string.isRequired,
    msg: PropTypes.object.isRequired,
  }

  render() {
    const {lang, msg} = this.props;

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
