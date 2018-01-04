const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin(
      {
        jQuery: "jquery",
        $: "jquery",
      }
    ),
  ],

  entry: './app/app.ts',
  output: {
    filename: './app/build/bundle.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
