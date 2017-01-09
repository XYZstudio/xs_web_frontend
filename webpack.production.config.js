var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {  
  entry: [
    path.resolve(ROOT_PATH, 'src/index'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
        include: path.resolve(ROOT_PATH, 'styles/assets') 
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'public', 'build'),
    publicPath: '/',
    filename: '/bundle.js'
  }
}; 