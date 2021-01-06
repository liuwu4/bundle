const fs = require('fs');

const NODE_ENV = process.argv;
const env = NODE_ENV.slice(2);

let api = 'http://localhost:8080/api';
let debug = false;

if (env[0] === 'production') {
  api = 'http://192.168.2.183:8080/api';
  debug = true;
}
const context = `
//自动生成通过script脚本创建
 export default {
    api: '${api}',
    debug: ${debug}
 }`;
fs.writeFile('./src/env.config.ts', context, function (err) {
  if (err) {
    return console.error(err);
  }
});