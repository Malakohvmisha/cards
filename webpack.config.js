"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const debug = process.env.NODE_ENV !== "production";

const webpackConfig = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.less']
	},
	entry: {
		style: './src/less/style',
		index: './src/js/index'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		// publicPath: "/",
		filename: "[name]-[hash].js",
		library: "[name]"
	},
	devtool: debug ? "inline-sourcemap" : false,
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets/'),
				use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
			}
		]
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/html/index.html'),
			filename: 'index.html',
			path: outputPath,
			chunksSortMode: 'manual',
			chunks: ['style', 'index']
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8080,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '0.0.0.0'
	}
}

module.exports = webpackConfig;