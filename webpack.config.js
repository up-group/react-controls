const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    './dist/up-react-controls': ['babel-polyfill', './src/index.ts'],
    './test/index': ['babel-polyfill', './test/index.tsx']
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
        test: /\.tsx?|.ts?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
          , 'ts-loader'
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?url=false' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.md$/, loader: 'html!markdown-loader' },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
      { test: /\.(eot|ttf|woff|woff2)$/, loader: 'file-loader' }
    ]
  },
  plugins: [

  ]
};