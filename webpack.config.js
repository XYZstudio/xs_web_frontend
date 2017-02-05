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
        loader: 'url-loader',
        include: path.resolve(ROOT_PATH, 'src/style/asset') 
      },
      {
        test: /\.json$/,
        loaders: ['json']
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
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: require('./config.json').host,
    port: require('./config.json').port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}; 