import webpack from 'webpack';
import path from 'path';

const config = {
  context: __dirname,
  entry: [
    './js/entry/app'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
    publicPath: '/dist/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
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
  ],
  module: {
    rules: [
      { enforce: 'pre', test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/ },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  }
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

export default config;