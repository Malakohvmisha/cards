"use strict";

// var webpack = require('webpack');
var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.less']
	},
	context: __dirname,
	entry: { 
		index: './src/js/index',
		style: './src/less/style'
	},
	output: {
		path: __dirname + "/build",
		publicPath: "/build/",
		filename: "[name].js",
		library: "[name]"
	},
	devtool: debug ? "inline-sourcemap" : null,
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},{
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            })
		}]
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new ExtractTextPlugin({
			filename: "[name].css"
		})
    ]
};