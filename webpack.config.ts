const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
    // rules: [
    //   {
    //     test: /\.tsx?$/,
    //     use: 'babel-loader',
    //     exclude: /node_modules/,
    //     query: {
    //       presets: ['es2015']
    //     }
    //   }
    // ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
