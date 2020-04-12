const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const Uglifyjs = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.argv[2].substr(2);
module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/images')],
    host: '0.0.0.0',
    port: 5000,
    hot: true,
    open: false,
    progress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack+react+bable+antd',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyCSS: true
      },
      scriptLoading: 'defer',
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/images/favicon-20191118043959587.ico'),
      hash: true,
      cache: true,
      showErrors: true,
      xhtml: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:4].css'
    }),
    new OptimizeCss(),
    new Uglifyjs({
      uglifyOptions: {
        compress: true,
      },
      cache: true,
      parallel: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
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
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#f24',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true,
            },
          },
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
};