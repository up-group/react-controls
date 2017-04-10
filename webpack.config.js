const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index.ts'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      ui: path.resolve(ROOT_PATH, 'src/'),
      icons:path.resolve(ROOT_PATH, 'src/theming/icons')
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: [path.join(__dirname, 'src')] },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.md$/, loader: 'html!markdown-loader' },
      { test: /\.svg$/, loader: 'svg-inline-loader'}
    ]
  },
  plugins: [

  ]
};
