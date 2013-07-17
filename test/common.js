global.path = require('path');
global.chai = require('chai');
global.expect = chai.expect;
chai.should()
global.libPath = process.env.IRCP_COV
  ? path.join(__dirname, '..', 'lib-cov')
  : path.join(__dirname, '..', 'lib');
global.modulePath = function() {
  var args = Array.prototype.slice.call(arguments, 0);
  args.unshift(global.libPath);
  return path.join.apply(path, args);
};
