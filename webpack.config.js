const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports ={
    mode: 'development',
    entry:{ 
        app:'./src/index.js',
        // click: './src/click.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '点击测试插件'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}