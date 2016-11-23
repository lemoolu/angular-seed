// 入口文件输出配置
var dirs = require('./base.js');

module.exports = {
    path: dirs.buildDir,
    filename: 'js/[name]-[hash:6].js',
    chunkFilename: 'js/[id]-[name].js',
    // publicPath: '/static/',  //发布时需要添加的绝对路径
};
