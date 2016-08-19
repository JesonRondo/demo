var path = require('path');
var fs = require('fs');
var args = process.argv;
var cwd = process.cwd();

var app = getParam('--app');
var packageJson = require(path.join(cwd, './package.json'));

// 获取参数
function getParam(k) {
  for (var i = 0; i < args.length; i++) {
    if (args[i] === k && args[i + 1]) {
      return args[i + 1];
    }
  }
  return null;
}

module.exports = {
  app: app,
  devPort: 7011,
  apilevel: 2,

  packageJson: packageJson,
  sourceFilePath: path.join(cwd, app, 'index.js'),
  targetFolderPath: path.join(cwd, app, 'dev'),

  webTemplate: path.join('./index.html'),
};
