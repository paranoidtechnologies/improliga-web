var nconf = require('nconf');
var fs = require('fs');
var path = require('path');

// Specifying an env delimiter allows you to override below config when shipping to production server
// by e.g. defining piping__ignore or version variables.
nconf.env('__');

var config = {
  api: {
    host: 'api.improvanywhere.org'
  },
  appLocales: ['en', 'cs'],
  defaultLocale: 'cs',
  googleAnalyticsId: 'UA-XXXXXXX-X',
  isProduction: process.env.NODE_ENV === 'production',
  piping: {
    // Ignore webpack custom loaders on server. TODO: Reuse index.js config.
    ignore: /(\/\.|~$|\.(css|less|sass|scss|styl))/,
    // Hook ensures always fresh server response even for client file change.
    hook: true
  },
  port: process.env.PORT || 8000,
  version: require('../../package').version,
  webpackStylesExtensions: ['css', 'less', 'sass', 'scss', 'styl']
};

// Use above config as a default one
// Multiple other providers are available like loading config from json and more
// Check out nconf docs for fancier examples
nconf.defaults(config);

const env = process.env.IMPROLIGA_ENV;

if (typeof env !== 'undefined') {
  const override = fs.realpathSync(path.join('conf', process.env.IMPROLIGA_ENV + '.json'));
  nconf.file('env', override);
}


module.exports = nconf.get();
