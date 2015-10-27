var hashFile = require('hash-file');
var fs = require('fs');
var Immutable = require('immutable');
var path = require('path');
var pack = require('../../package.json');
var isProduction = process.env.NODE_ENV === 'production';

var Map = Immutable.Map;
var env = process.env.IMPROLIGA_ENV;

var getAssetHash = function(filePath) {
  if (!isProduction) return '';

  try {
    return hashFile.sync(filePath);
  } catch (e) {
    return '';
  }
};

var config = new Map({
  api: {
    host: 'api.improvanywhere.org'
  },
  assetsHashes: {
    appCss: getAssetHash('build/app.css'),
    appJs: getAssetHash('build/app.js')
  },
  googleAnalyticsId: 'UA-XXXXXXX-X',
  isProduction: isProduction,
  port: process.env.PORT || 8000,
  version: pack.version,
  webpackStylesExtensions: ['css', 'styl']
});

if (typeof env !== 'undefined') {
  var overridePath = fs.realpathSync(path.join('conf', env + '.json'));
  var override = require(overridePath);

  config = config.merge(override);
}


module.exports = config.toJS();
