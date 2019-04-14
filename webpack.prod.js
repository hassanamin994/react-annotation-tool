const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: 'apps/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
    ],
});
