const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    devServer: {
        port:3000,
        contentBase: path.join(__dirname, './dist'),
        inline: true,
        hot: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],


};