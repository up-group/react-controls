const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            ui: path.resolve(ROOT_PATH, 'src/'),
            icons: path.resolve(ROOT_PATH, 'src/theming/icons')
        },
    },
    output : {
        publicPath: '/assets'
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
                test: /\.scss$/,
                use: ["style-loader", // creates style nodes from JS strings
                     "css-loader", // translates CSS into CommonJS
                     "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(jpe?g|gif|png)$/,
                loader: 'file-loader?name=img/[hash].[ext]'
            }
        ]
    },
    plugins: [

    ]
};