/* eslint-env node */

var makeWebpackConfig = require('./webpack/makeConfig');

var getBrowserPath = function(browser) {
  return browser.toLowerCase().split(/[ /-]/)[0];
};

var coverageReporter = {
  dir: 'coverage/',
  reporters: [
    {
      type: 'html',
      subdir: getBrowserPath
    },
    {
      type: 'lcov',
      subdir: getBrowserPath
    }
  ]
};

module.exports = function(config) {

  config.set({
    // autoWatch, it works enabled or not. Probably defined by singleRun.
    basePath: '',
    browsers: ['PhantomJS'],
    coverageReporter: coverageReporter,
    exclude: ['./node_modules'],
    files: [
      'src/test/index.js'
    ],
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    logLevel: process.env.CONTINUOUS_INTEGRATION
      ? config.LOG_WARN
      : config.LOG_INFO,
    port: 9876,
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/test/index.js': ['webpack', 'sourcemap'],
    },
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: process.env.CONTINUOUS_INTEGRATION ? [
      'coverage', 'mocha'
    ] : [
      'progress', 'coverage', 'beep'
    ],
    webpack: makeWebpackConfig(true),
    webpackServer: {
      noInfo: true
    }
  });
};
