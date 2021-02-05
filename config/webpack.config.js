const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const Uglifyjs = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
let env = process.argv[2];
if (env) {
  env = env.substr(2);
}
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval',
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    hot: true,
    open: false,
    progress: true
  },
  optimization: {
    minimize: true,
    removeEmptyChunks: false,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'initial',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
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
      // template: path.resolve(__dirname, "src/index.html"),
      // favicon: path.resolve(__dirname, 'src/images/favicon-20191118043959587.ico'),
      hash: true,
      cache: true,
      showErrors: true,
      xhtml: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new OptimizeCss(),
    new Uglifyjs({
      uglifyOptions: {
        compress: true
      },
      cache: true,
      parallel: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader:
              env === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#f24',
                'link-color': '#1DA57A',
                'border-radius-base': '2px'
              },
              javascriptEnabled: true
            }
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
  }
};
