const path = require('path');
const {resolve} = require('path');
const ROOT_PATH = path.resolve(__dirname);
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const codesandbox = require('remark-codesandbox');

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
                test: /\.stor(ies|y)\.mdx$/,
                exclude: [/node_modules/],
                include: [
                  resolve(__dirname, '../src'),
                  resolve(__dirname, '../docs')
                ],
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      plugins: ['@babel/plugin-transform-react-jsx']
                    }
                  },
                  {
                    loader: '@mdx-js/loader',
                    options: {
                      compilers: [createCompiler({})],
                      remarkPlugins: [
                        [
                          codesandbox,
                          {
                            mode: 'iframe',
                            query: {
                              fontsize: 14
                            },
                            customTemplates: {
                              'react-controls': {
                                extends: `file:${resolve(
                                  __dirname,
                                  '../docs/tools/templates/react-controls-codesandbox-template'
                                )}`,
                                entry: 'src/App.js'
                              }
                            },
                            autoDeploy: true
                          }
                        ]
                      ]
                    }
                  }
                ]
            });
            rules.push({
                test: /\.jsx?/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, '../'),
                exclude: /node_modules/,
            });
            rules.push({
                test: /\.(ts|tsx)$/,
                  exclude: [/node_modules/],
                  include: [
                    resolve(__dirname, '../src')
                  ],
                  use: [
                      require.resolve('babel-loader'),
                      require.resolve('ts-loader'),
                    //   {
                    //     loader: 'react-docgen-typescript-loader',
                    //     options: {
                    //       tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                    //     },
                    //   }
                  ]
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