var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  entry: [
    path.resolve(ROOT_PATH, 'src/index'),
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=20000',
        include: path.resolve(ROOT_PATH, 'src/style/asset') 
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      // font-awesome
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      component: path.resolve(ROOT_PATH, 'src/component'),
      style: path.resolve(ROOT_PATH, 'src/style'),
      asset: path.resolve(ROOT_PATH, 'src/style/asset'),
      store: path.resolve(ROOT_PATH, 'src/redux'),
      root: path.resolve(ROOT_PATH),
    }
  },
  output: {
    path: path.resolve(ROOT_PATH, 'public', 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false, // remove comments
      compress: {
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false, // good for prod apps so users can't peek behind curtain
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
      }
    })
  ]
}; 