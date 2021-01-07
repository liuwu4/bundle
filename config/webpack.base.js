const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "js/[name].[hash:8].js",
    path: path.resolve("dist"),
  },
  optimization: {
    // runtimeChunk: "single",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name][hash:8].css",
    }),
    new HtmlWebpackPlugin({
      title: "webpack+react+bable+antd",
      hash: true,
      cache: true,
      templateContent: '<div id="root"></div>',
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      inject: true,
      showErrors: true,
      xhtml: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /(c|le)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        include: path.resolve("src"),
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
