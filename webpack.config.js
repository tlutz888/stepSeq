
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,  
  entry: './src/client/index.jsx',

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'bundle.js',
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    contentBase: path.resolve(__dirname, 'dist'),
    // enable HMR on the devServer
    hot: true,
    // match the output 'publicPath'
    publicPath: '/',
    // fallback to root for other urls
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [path.resolve(__dirname, "./src")],

        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              // "@babel/preset-typescript",
            ],
          },
        }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //     enforce: "pre",
      //     test: /\.js$/,
      //     loader: "source-map-loader"
      // },

      {
        test: /\.s[ac]ss$/i,
        use: [ 'style-loader', 'css-loader','sass-loader' ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({}),
  ],
};