const conf = require('./gulp.conf');

/** THE : npm install gulp url proxy-middleware browser-sync --save-dev */
var url = require('url'); /** THE */
var proxy = require('proxy-middleware');/** THE */


module.exports = function () {
 
 /** THE */
  var proxyOptions = url.parse('http://ip.jsontest.com');
  proxyOptions.route = '/api';
/** THE */


  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      middleware: [proxy(proxyOptions)] /** THE */
    },
    open: false
  };
};
