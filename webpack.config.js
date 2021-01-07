const base = require("./config/webpack.base.js");
const pro = require("./config/webpack.pro.js");
const dev = require("./config/webpack.dev.js");
const ENV = {
  development: dev,
  production: pro,
};

let mode = process.argv[2];
if (mode) {
  mode = mode.substr(2);
}

const config = {
  mode: mode || "development",
  ...base,
};

module.exports = () => {
  console.log(config.mode);
  const keys = Object.keys(ENV[config.mode]);
  (keys || []).forEach((item) => {
    Object.assign(config, {
      [item]: { ...config[item], ...ENV[config.mode][item] },
    });
  });
  return config;
};
