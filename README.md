>[webpack](https://www.webpackjs.com/ '文档地址')环境为webpack4.x
## 安装环境
1.``` yan add webpack webpack-cli || npm add webpack webpack-cli ``` 根据需要自行选择全局或局部安装

## 运行
1. ``` yarn webpack || npm webpack ``` 构建

## ``` html-webpack-plugin ```
> 创建一个默认的```html```文件后配置一个 ```html```文件

### 安装(```install```)
> yarn add html-webpack-plugin -D || npm install html-webpack-plugin  --save-dev
### 使用 [文档地址](https://github.com/jantimon/html-webpack-plugin 'github')
```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const options = {
        title: '标题',
        template: '默认模板url'
    };
    new HtmlWebpackPlugin(options);
    // 注: 根据需要配置不同选项
```

## ```clean-webpack-plugin```
>1. 用于清除```build```后无用的文件  

### 安装(```install```)
> yarn add clean-webpack-plugin -D || npm install clean-webpack-plugin --save-dev
### 使用 [文档地址](https://github.com/johnagan/clean-webpack-plugin 'github')
```
    const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
    new CleanWebpackPlugin();
```

### ```mini-css-extract-plugin```
> 1. 提取 ```css```
### 安装(```install```)
> yarn add mini-css-extract-plugin -d || npm install --save-dev mini-css-extract-plugin
### 使用[文档地址](https://github.com/webpack-contrib/mini-css-extract-plugin 'github')
```
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   const options = {
        filename: '',
    };
    new MiniCssExtractPlugin(options);
     // 注:将style-loader替换为 MiniCssExtractPlugin.loader
```
### ```optimize-css-assets-webpack-plugin```
1. 压缩```css```
### 安装(```install```)
> yarn add -d optimize-css-assets-webpack-plugin
 || npm install --save-dev optimize-css-assets-webpack-plugin

### 使用文档[文档地址](https://github.com/NMFR/optimize-css-assets-webpack-plugin 'github')
```
    cosnt OptimizeCss = require('optimize-css-assets-webpack-plugin');
    const options = {};
    new OptimizeCss(options);
    // 使用此插件会是webpack压缩js功能失效 需要重新配置uglify-js[webpace]内置插件无需再次安装]功能
```





>[webpack](https://www.webpackjs.com/ '文档地址')环境为webpack4.x
## 安装环境
1.``` yan add webpack webpack-cli || npm add webpack webpack-cli ``` 根据需要自行选择全局或局部安装

## 运行
1. ``` yarn webpack || npm webpack ``` 构建

## ``` html-webpack-plugin ```
> 创建一个默认的```html```文件后配置一个 ```html```文件

### 安装(```install```)
> yarn add html-webpack-plugin -D || npm install html-webpack-plugin  --save-dev
### 使用 [文档地址](https://github.com/jantimon/html-webpack-plugin 'github')
```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const options = {
        title: '标题',
        template: '默认模板url'
    };
    new HtmlWebpackPlugin(options);
    // 注: 根据需要配置不同选项
```

## ```clean-webpack-plugin```
>1. 用于清除```build```后无用的文件  

### 安装(```install```)
> yarn add clean-webpack-plugin -D || npm install clean-webpack-plugin --save-dev
### 使用 [文档地址](https://github.com/johnagan/clean-webpack-plugin 'github')
```
    const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
    new CleanWebpackPlugin();
```

### ```mini-css-extract-plugin```
> 1. 提取 ```css```只能在production中使用, css 热加载会失效
### 安装(```install```)
> yarn add mini-css-extract-plugin -d || npm install --save-dev mini-css-extract-plugin
### 使用[文档地址](https://github.com/webpack-contrib/mini-css-extract-plugin 'github')
```
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   const options = {
        filename: '',
    };
    new MiniCssExtractPlugin(options);
     // 注:将style-loader替换为 MiniCssExtractPlugin.loader
```
### ```optimize-css-assets-webpack-plugin```
1. 压缩```css```
### 安装(```install```)
> yarn add -d optimize-css-assets-webpack-plugin
 || npm install --save-dev optimize-css-assets-webpack-plugin

### 使用文档[文档地址](https://github.com/NMFR/optimize-css-assets-webpack-plugin 'github')
```
    cosnt OptimizeCss = require('optimize-css-assets-webpack-plugin');
    const options = {};
    new OptimizeCss(options);
    // 使用此插件会是webpack压缩js功能失效 需要重新配置uglifyjs-webpack-plugi功能
```





