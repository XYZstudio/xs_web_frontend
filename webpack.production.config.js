var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
      }
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
    }
  },
  output: {
    path: path.resolve(ROOT_PATH, 'public', 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}; 