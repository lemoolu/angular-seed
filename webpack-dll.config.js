//dll打包
const webpack = require('webpack');
const vendors = [
    'jquery', 'angular'
];

module.exports = {
    output: {
        path: '.tmp/dll',
        filename: '[name][hash:6].js',
        library: '[name][hash:6]',
    },
    entry: {
        "dll": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name][hash:6]',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
            context: __dirname,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
};
