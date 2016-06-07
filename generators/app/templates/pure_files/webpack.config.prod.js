var webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    app: './index.js',
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
    filename: '[name].[hash:5].js',
    publicPath: 'http://localhost/'  //TODO modify to http://fecdn.59store.com/
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader!less-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[name]_[hash:5].[ext]'}
    ]
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
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.[hash:5].js'),
    new ExtractTextPlugin("[name].[hash:5].css"),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      unused: true,
      dead_code: true,
      warnings: false
    }),
    new HtmlWebpackPlugin({
      minify: {},
      template: './index.html'
    })
  ]
}
