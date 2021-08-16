const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        './dist/index': ['babel-polyfill', './test/index.tsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'test/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            ui: path.resolve(ROOT_PATH, 'src/'),
            icons: path.resolve(ROOT_PATH, 'src/theming/icons')
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                    , 'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.md$/, loader: 'html!markdown-loader' },
            { test: /\.svg$/, loader: 'svg-inline-loader' },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=fonts/[hash].[ext]"
            },
            {
                test: /\.(jpe?g|gif|png)$/,
                loader: 'file-loader?name=img/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};
