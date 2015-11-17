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
  if (args.production) {
    env = 'production';
  }

  if (env === 'production') {
    args.production = true;
  }

  process.env.NODE_ENV = env;
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
  runSequence(env === 'production' ? 'karma-ci' : 'karma-dev', done);
});

gulp.task('test', (done) => {
  runSequence('env', 'eslint-ci', 'karma-ci', done);
});

gulp.task('server-hot', bg('node', './webpack/server'));
gulp.task('server-tdd-runner', bg('node', 'src/server'));

gulp.task('server-tdd-helper', (done) => {
  console.log('Restarting tdd server');
  runSequence('server-tdd-runner', done);
});

gulp.task('server-tdd', ['server-tdd-runner'], () => {
  gulp.watch(['./src/**/*'], ['server-tdd-helper']);
});

gulp.task('server', ['env', 'build'], bg('node', 'src/server'));

// Run karma configured for TDD.
gulp.task('tdd', ['env', 'server-hot'], (done) => {
  runSequence('server-tdd', 'karma-dev', done);
});

gulp.task('default', ['server']);
