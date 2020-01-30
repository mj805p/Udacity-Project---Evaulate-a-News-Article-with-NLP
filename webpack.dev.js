const path = require('path')
const webpack = require('webpack')
// Add Plugins
// HtmlWebpackPlugin - adds dynamic script to bottom of index.html file
const HtmlWebPackPlugin = require("html-webpack-plugin")
// CleanWebpackPlugin - remove all unused webpack assets after every successful rebuild
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    entry: ['babel-polyfill','./src/client/index.js'],
    mode: 'development',
    // Add output
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    //devtool: 'source-map',
    //stats: 'verbose',
    module: {
        rules: [
            {
                // Converts newer javascript to es5 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                // Convert sass to css
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    // Add Plugins
    plugins: [
        // Add dynamic script tag to bottom of index.html file
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        // Remove unused webpack assets after rebuild
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
