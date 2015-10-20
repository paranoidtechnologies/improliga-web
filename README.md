# Improliga website

[![Build Status](https://travis-ci.org/just-paja/improliga-web.svg?branch=master)](https://travis-ci.org/just-paja/improliga-web)
[![Coverage Status](https://coveralls.io/repos/just-paja/improliga-web/badge.svg?branch=master&service=github)](https://coveralls.io/github/just-paja/improliga-web?branch=master)

## Install

You need to have `Node.js` installed with `npm`. Once you clone the repository, just do `npm install` and you should be set and ready to go.

This was not tested on Windows nor OSX platforms.

### Install API

This is only a frontend client that reads data from [separated API](https://github.com/just-paja/improvanywhere-api). If you use default configuration, it will read data from default online API. It is encouraged to develop on local version of it.

## Configure

You may create a config environment override in `conf/[env-name].json`. The application will use it if you configure environment variable `IMPROLIGA_ENV` to match the env name.

## Running application

To run the default server, just use

`$ npm start`


### TDD

If you wish to develop in test driven environment, just run following command. It will start the server including hot reload and run tests continuously.

`$ gulp tdd`

### Testing

To run tests localy, use

`$ gulp test`
