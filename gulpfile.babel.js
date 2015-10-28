/* eslint-disable no-undef, no-console */
import bg from 'gulp-bg';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import path from 'path';
import runSequence from 'run-sequence';
import webpackBuild from './webpack/build';
import yargs from 'yargs';
import {Server as KarmaServer} from 'karma';

let env = 'development';
const args = yargs
  .alias('p', 'production')
  .argv;

const runEslint = () => {
  return gulp.src([
    'gulpfile.babel.js',
    'src/**/*.js',
    'webpack/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
};

const runKarma = ({singleRun}, done) => {
  const server = new KarmaServer({
    configFile: path.join(__dirname, 'karma.conf.js'), // eslint-disable-line no-undef
    singleRun: singleRun
  }, done);
  server.start();
};

gulp.task('env', () => {
  if (typeof process.env.NODE_ENV !== 'undefined') { // eslint-disable-line no-undef
    env = process.env.NODE_ENV; // eslint-disable-line no-undef
  }

  if (args.production) {
    env = 'production';
  }

  if (env === 'production') {
    args.production = true;
  }

  process.env.NODE_ENV = env; // eslint-disable-line no-undef
});

gulp.task('build-webpack', ['env'], webpackBuild);
gulp.task('build', ['build-webpack']);

gulp.task('eslint', () => {
  return runEslint();
});

gulp.task('eslint-ci', () => {
  return runEslint().pipe(eslint.failAfterError());
});

gulp.task('karma-ci', (done) => {
  runKarma({singleRun: true}, done);
});

gulp.task('karma-dev', (done) => {
  runKarma({singleRun: false}, done);
});

gulp.task('karma', (done) => {
  runSequence(process.env.NODE_ENV === 'production' ? 'karma-ci' : 'karma-dev', done);
});

gulp.task('test', (done) => {
  runSequence('env', 'eslint-ci', 'karma', done);
});

gulp.task('server-hot', bg('node', './webpack/server'));
gulp.task('server-nodemon', bg('node_modules/.bin/nodemon', 'src/server'));

gulp.task('server', ['env', 'build'], bg('node', 'src/server'));

// Run karma configured for TDD.
gulp.task('tdd', ['env'], (done) => {
  runSequence('server-hot', 'server-nodemon', 'karma-dev', done);
});

gulp.task('default', ['server']);
