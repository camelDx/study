const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');		//生成编译文件
const CleanWebpackPlugin = require('clean-webpack-plugin');		//清除文件夹多余文件

//热更新  HMR
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		filename :　'build.js',
// 		path: path.resolve( __dirname ,'dist')
// 	},
// 	module:{
// 		rules:[
// 			{
// 				test:/\.css$/,
// 				use:[
// 					'style-loader',
// 					'css-loader'
// 				]
// 			},
// 			{
// 				test:/\.(png|gif|jpg|jpeg)$/,
// 				use:[
// 					'file-loader'
// 				]
// 			},
// 			{
// 				test:/\.(woff|woff2|eot|ttf|otf)$/,
// 				use:[
// 					'file-loader'
// 				]
// 			},
// 			{
// 				test:/\.(csv|tsv)$/,
// 				use:[
// 					'csv-loader'
// 				]
// 			},
// 			{
// 				test:/\.xml$/,
// 				use:[
// 					'xml-loader'
// 				]
// 			}
// 		]
// 	}
// }

// module.exports = {
// 	entry:{
// 		// index:'./src/index.js',
// 		// user:'./src/user.js'
// 		index:'./src/index.js'
// 	},
// 	output:{
// 		filename:'[name].dx.js',
// 		path:path.resolve(__dirname,'dist'),
// 		publicPath: '/'
// 	},
// 	module:{
// 		rules:[
// 			{
// 				test:/\.css$/,
// 				use:[
// 					'style-loader',
// 					'css-loader'
// 				]
// 			},
// 			{
// 				test:/\.(png|jpeg|jpg|gif)$/,
// 				use:[
// 					'file-loader'
// 				]
// 			}
// 		]
// 	},
// 	plugins:[
// 		new HtmlWebpackPlugin({
// 			title:'Odddd'
// 		}),
// 		new CleanWebpackPlugin(['dist']),
// 		// new webpack.NamedModulesPlugin(),
// 		new webpack.HotModuleReplacementPlugin()
// 	],
// 	devtool:'inline-source-map',			//检查错误
// 	devServer:{
// 		contentBase:'./dist',			//建立本地 服务器 修改文件自动编译  webpack-dev-server
// 		hot:true				//启用HMR
// 	}
// }


// module.exports = {
// 	entry : './src/index.js',
// 	output:{
// 		filename:'bundle.js',
// 		path:path.resolve(__dirname,'dist')
// 	},
// 	plugins:[
// 		new HtmlWebpackPlugin({
// 			title:'import和export'
// 		}),
// 		new CleanWebpackPlugin(['dist']),
// 		new UglifyJSPlugin()
// 	]
// }


// 防止重复  webpack公共插件的使用
// module.exports = {
// 	entry : {
// 		index : './src/index.js',
// 		another: './src/another.js'
// 	},
// 	plugins:[
// 		new HtmlWebpackPlugin({
// 			title:'代码分离--防止重复'
// 		}),
// 		new webpack.optimize.CommonsChunkPlugin({
// 			name:'common'	//指定公共 build 名称
// 		})
// 	],
// 	output:{
// 		filename:'[name].build.js',
// 		path:path.resolve(__dirname,'dist')
// 	}
// }

//动态导入 	
module.exports = {
	entry:{
		index:'./src/newIndex.js'
	},
	output:{
		filename:'[name].build.js',
		chunkFilename:'[name].build.js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'代码分离-动态分离'
		}),
		new CleanWebpackPlugin(['dist'])
	]
}

