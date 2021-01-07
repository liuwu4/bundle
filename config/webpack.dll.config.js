const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    react: ["react"],
    reactDom: ["react-dom"],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve("dll"),
    library: "[name]_library",
  },
  plugins: [
    new CleanWebpackPlugin({
      filename: path.resolve("dll"),
    }),
    new DllPlugin({
      name: "[name]_library",
      path: path.resolve("dll/[name].manifest.json"),
    }),
  ],
};
