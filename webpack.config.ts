require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './src/index.tsx',
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.tsx'
  },
  module: {
    loader: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
