var common = require('./webpack.common.js');

var ip = require('ip');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var type = 'web';
console.log(common.devPort);
module.exports = {
  entry: {
    'bundle.web': common.sourceFilePath
  },
  output: {
    path: common.targetFolderPath,
    filename: '[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: common.devPort
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules\/(?!@).*/,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue',
      exclude: /node_modules\/(?!@).*/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': '"development"',
      'PLATFORM': JSON.stringify(type)
    }),
    new LiveReloadPlugin(),
    new HtmlWebpackPlugin({
      template: common.webTemplate,
      filename: 'index.html',
      inject: false,
      // data
      app: common.app,
      bundle: 'bundle.web.js',
      liveReload: '<script src="http://' + ip.address() + ':35729/livereload.js"></script>',
      title: common.packageJson.description,
      apilevel: common.apilevel,
      timestamp: +new Date
    })
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.vue']
  },
  devtool: '#eval-source-map'
};
