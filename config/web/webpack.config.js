const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        port: 3000
    }
};