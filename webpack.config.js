const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  context: __dirname,
  entry: [
    './js/entry/clientApp',
    './style/main.styl'
  ],
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
    // always starts with a / where the static files are served
    publicPath: '/dist/',
    historyApiFallback: true,
    // tell the dev server where to serve static content from
    // contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: "style/[name].[contentHash].css",
      disable: process.env.NODE_ENV !== 'production'
    })
  ],
  module: {
    rules: [
      { enforce: 'pre', test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/ },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve('js'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: ['css-loader', 'stylus-loader']
        })
      }
    ],
  }
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config;