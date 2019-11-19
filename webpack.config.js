const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports ={
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/images')],
    port: 12345,
    open: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
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
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', 'tsx'],
    alias: {
      '@src': resolve('src'),
      '@alials1': resolve('./src/pages/alials1')
    }
  }
};