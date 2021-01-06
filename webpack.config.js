const base = require("./config/webpack.base.js");
const pro = require("./config/webpack.pro.js");
const dev = require("./config/webpack.dev.js");
const ENV = {
  development: dev,
  production: pro,
};
let env = process.argv[2];
if (env) {
  env = env.substr(2);
}
const config = {
  mode: env || "development",
  ...base,
  ...ENV[env],
};
module.exports = config;
