const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({
            config,
            mode
        }) => {
            // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
            // You can change the configuration based on that.
            // 'PRODUCTION' is used when building the static version of storybook.
            const extensions = ['.ts', '.tsx', '.js', '.jsx'] ; 
            
            if(config.resolve.extensions != null) {
                extensions.forEach((e) => {
                    if (!config.resolve.extensions.includes(e))
                        config.resolve.extensions.push(e);
                });
            } else {
                config.resolve.extensions = extensions;
            }

            config.resolve.alias.ui = path.resolve(ROOT_PATH, 'src/');
            config.resolve.alias.icons = path.resolve(ROOT_PATH, 'src/theming/icons')
            
            // Clean rules
            config.module.rules = config.module.rules.filter(r => r.test.toString() !== /\.css$/.toString());
            const rules = []
            rules.push({
                test: /\.(stories|story)\.mdx$/,
                use: [
                    {
                      loader: 'babel-loader',
                      // may or may not need this line depending on your app's setup
                      options: {
                        plugins: ['@babel/plugin-transform-react-jsx'],
                      },
                    },
                    {
                      loader: '@mdx-js/loader',
                      options: {
                        compilers: [createCompiler({})],
                      },
                    },
                ],
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/,
            });
            rules.push({
                test: /\.jsx?/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/,
            });
            rules.push({
                test: /\.tsx?/,
                use: [{
                    loader: 'babel-loader'
                }, 'ts-loader'],
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/,
            });

            rules.push({
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, '../'),
            });
            rules.push({
                test: /\.md$/,
                loader: 'html!markdown-loader',
                include: path.resolve(__dirname, '../'),
            });
            rules.push({
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                include: path.resolve(__dirname, '../'),
            });
            rules.push({
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/font-woff",
                include: path.resolve(__dirname, '../'),
            });
            rules.push({
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/font-woff",
                include: path.resolve(__dirname, '../'),
            });
            rules.push({
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/octet-stream",
                include: path.resolve(__dirname, '../'),
            });
            config.module.rules.push({
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=fonts/[hash].[ext]",
                include: path.resolve(__dirname, '../'),
            });
            rules.push({
                 test: /\.(jpe?g|gif|png)$/,
                 loader: 'file-loader?name=img/[hash].[ext]',
                 include: path.resolve(__dirname, '../'),
            });

            config.module.rules = [
                ...rules,
                //...config.module.rules,
            ] 
            return config;
        };