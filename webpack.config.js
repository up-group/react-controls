const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    './test/dist/index': ['babel-polyfill', './test/index.tsx']
  },
  output: {
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
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
          , 'ts-loader'
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.md$/, loader: 'html!markdown-loader' },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
      { test: /\.(eot|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [

  ]
};