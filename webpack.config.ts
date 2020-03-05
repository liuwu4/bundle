const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const WebpackBuildNotifier = require('webpack-build-notifier');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/images')],
    port: 12345,
    open: true,
    hot: true,
    host: '0.0.0.0'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new ProgressBarWebpackPlugin(),
    new WebpackBuildNotifier()
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {

            }
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        exclude: '/node_modules',
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ]
  }
};