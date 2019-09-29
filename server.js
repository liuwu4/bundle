const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = express();
const complier = webpack(config);
app.use(webpackMiddleware(complier,{
    publicPath: config.output.publicPath,
}))
app.listen(3000, function(){
    console.log('SUCCESS');
})