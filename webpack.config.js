const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, '/src/index.ts'),
        jqxtest: path.join(__dirname, '/src/jqxtest.ts'),
        second: path.join(__dirname, '/src/second.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [/node_modules/, path.resolve(__dirname, 'src')]
            },
            {
                test: /\.(woff(2)?|ttf|eot|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/'
                    }
                }]
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
        new HtmlWebpackPlugin({
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'second.html',
            chunks: ['second']
        }),
        new HtmlWebpackPlugin({
            filename: 'jqxtest.html',
            chunks: ['jqxtest']
        }),
        new webpack.ProvidePlugin({
            $$: 'jquery',
            // jQuery: 'jquery'
        })
    ],


};