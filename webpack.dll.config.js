// dll打包
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var dirs = require('./webpack-config/base.js');

var vendors = [
    'jquery', 'angular',
];

module.exports = {
    output: {
        path: dirs.dllDir,
        filename: '[name][hash:6].js',
        library: '[name][hash:6]',
    },
    entry: {
        dll: vendors,
    },
    plugins: [
        new CleanPlugin([dirs.dllDir]),
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name][hash:6]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
            context: __dirname,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ],
};