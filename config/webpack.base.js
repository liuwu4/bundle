const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "js/[name].[hash:8].js",
    path: path.resolve("dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack+react+bable+antd",
      hash: true,
      cache: true,
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      inject: true,
      showErrors: true,
      xhtml: true,
    }),
  ],
};
