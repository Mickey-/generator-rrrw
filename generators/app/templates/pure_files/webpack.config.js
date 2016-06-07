var webpack = require('webpack'),
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
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader'
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
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './src',
    hot: true
  }
}
