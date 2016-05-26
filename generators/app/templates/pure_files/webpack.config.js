var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer');
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    lib: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: /src/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    autoprefixer({
      browsers: [ 'Android >= 4', 'iOS > 6', 'last 10 Chrome versions', 'last 4 Firefox versions', 'Safari >= 6', 'ie > 8' ]
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    new ExtractTextPlugin("main.css"),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: './src',
    hot: true
  }
}
