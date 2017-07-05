var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: './src/App.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 3333
   },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015', 'react']}
            }
        ]
    }
}