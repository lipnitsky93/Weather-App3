// Karma configuration
// Generated on Tue Oct 16 2018 12:06:42 GMT+0300 (Belarus Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../script.js',
      '../controllers/*.js',
      '../services/*.js',
      '../directives/*.js',
      '../templates/*.html',
      //'../templates/weather-app.template.html',
      //'../**/*.html',
      //'../*.html',
      'unit/controllers/*.js',
      'unit/directives/*.js',
      'unit/services/*.js',
      'unit/*.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
      '../templates/*.html': ['ng-html2js']
      //'../**/*.html': ['ng-html2js'],
      //'../*.html' : ['ng-html2js']
      //'../templates/weather-app.template.html': ['ng-html2js']
    },

    // plugins: [
    //   'karma-chrome-launcher',
    //   'karma-ng-html2js-preprocessor',
    //   'karma-jasmine',
    //   //'jasmine',
    //   //'jasmine-core',
    //   'karma-spec-reporter',
    // ],

    ngHtml2JsPreprocessor: {

      // cacheIdFromPath : function(filepath) {
      //     console.log("karma, cacheIdFromPath " + filepath);
      //     var templateFile = filepath.substr(filepath.indexOf("/app/") + 1 );
      //     console.log("karma, templateFile: " + templateFile);
      //     return templateFile;
      // },

      // cacheIdFromPath : function(filepath) {
      //   return filepath.substr(filepath.indexOf("app")+8);
      // },

      // stripPrefix: "(.*)project2",

      // cacheIdFromPath: function(filepath) {
      //   let cacheId = filepath.split('/');
      //   return cacheId[ cacheId.length - 1 ];
      // },


      // stripPrefix: '../templates/',


      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },

    


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
