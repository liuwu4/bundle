const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const Uglifyjs = require("uglifyjs-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "js/[name].[hash:8].js",
    path: path.resolve("dist"),
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        modules: {
          test: /\/node_modules\//,
          name: "modules",
          chunks: "all",
          priority: -20,
        },
      },
    },
    minimizer: [
      new Uglifyjs({
        cache: true,
        parallel: true,
        uglifyOptions: {
          ie8: true,
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCss(),
    new MiniCssExtractPlugin({
      filename: "css/[name][hash:8].css",
      chunkFilename: "css/[name][hash:8].css",
    }),
    new webpack.DllReferencePlugin({
      manifest: require("../dll/react.manifest.json"),
    }),
    new webpack.DllReferencePlugin({
      manifest: require("../dll/reactDom.manifest.json"),
    }),
    new HtmlWebpackPlugin({
      title: "webpack+react+bable+antd",
      hash: true,
      cache: true,
      templateContent: `
      <div id="root"></div>
      <script src="./dll/react.dll.js"></script>
      <script src="./dll/reactDom.dll.js"></script>
      `,
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      inject: true,
      showErrors: true,
      xhtml: true,
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /(c|le)ss$/,
        exclude: path.resolve("node_modules"),
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
        exclude: path.resolve("node_modules"),
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
