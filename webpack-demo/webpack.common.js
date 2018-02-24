const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		index:'./src/index.js'
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'生产环境和开发环境'
		})
	],
	output:{
		filename:'build.js',
		path:path.resolve(__dirname,'dist')
	}
}