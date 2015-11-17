import React, {Component, PropTypes} from 'react';

export default class Html extends Component {

  static propTypes = {
    appCssHash: PropTypes.string.isRequired,
    bodyHtml: React.PropTypes.string.isRequired,
    gtmId: PropTypes.string.isRequired,
    isProduction: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired
  }

  render() {
    const {gtmId, appCssHash, bodyHtml, isProduction, title, version} = this.props;

    // Only for production. For dev, it's handled by webpack with livereload.
    const linkStyles = isProduction &&
      <link href={'/build/app.css?v=' + appCssHash} rel="stylesheet" />;

    const googleTagManager = gtmId && <script
      dangerouslySetInnerHTML={{__html: `               
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');`
      }}
      />;

    const googleTagManagerDataLayer = gtmId && <script
      dangerouslySetInnerHTML={{__html: `               
       dataLayer.push({
        'event':'virtualPageview',
        'pageName':'${title}',
        'pageURL':window.location.hostname + window.location.pathname
        });`
      }}
      />;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
          <meta content={version} name="version" />
          <title>{title}</title>
          <link href="/assets/bower/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          {linkStyles}      
          {googleTagManager}
          {googleTagManagerDataLayer}
        </head>
        <body dangerouslySetInnerHTML={{__html: bodyHtml}} />
      </html>
    );
  }

}
