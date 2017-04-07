module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test/main.js', watched: false }
    ],
    exclude: [
    ],
    customLaunchers: {
          Chrome_travis_ci: {
              base: 'Chrome',
              flags: ['--no-sandbox']
          }
    },
    preprocessors: {
      'test/main.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome_travis_ci'],
    singleRun: true,
    concurrency: Infinity
  })
}