import React, {Component, PropTypes} from 'react';

export default class Html extends Component {

  static propTypes = {
    appCssHash: PropTypes.string.isRequired,
    bodyHtml: React.PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    isProduction: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired
  }

  render() {
    const {appCssHash, bodyHtml, isProduction, title, version} = this.props;

    // Only for production. For dev, it's handled by webpack with livereload.
    const linkStyles = isProduction &&
      <link href={'/build/app.css?v=' + appCssHash} rel="stylesheet" />;

    const analytics = isProduction && googleAnalyticsId !== 'UA-XXXXXXX-X' &&
      <script
        dangerouslySetInnerHTML={{__html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', '${googleAnalyticsId}', 'auto'); ga('send', 'pageview');`}}
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
          {analytics}
        </head>
        <body dangerouslySetInnerHTML={{__html: bodyHtml}} />
      </html>
    );
  }

}
