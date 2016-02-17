var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// node server
// webpack-dev-server --port 3000
// webpack-dev-server --hot --inline
module.exports = {
	entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/app.jsx'
    ],
	output: {
		path: __dirname+"/dist",
		filename: "app-webpack3.js",
		publicPath:"/dist"
	},
	resolve: {
        extensions: ['','.js','.jsx']
    },
	module: {
		loaders: [
			{ test: /\.jsx$/, exclude: /node_modules/,loaders: ['react-hot','jsx'] },
			//{ test: /\.scss$/, loader:'style!css!sass'},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")},
		]
	},
	sassLoader: {
	    includePaths: [__dirname+"./sass"]
	},
	plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('common.js'),
      new ExtractTextPlugin("style.css")
    ]
};

/*
1.new webpack.optimize.CommonsChunkPlugin('common.js')
可以将多个打包后的资源中的公共部分打包成单独的文件

html中使用（一些公共js代码会放在common.js中）：
<script type="text/javascript" src="dist/common.js"></script>
<script type="text/javascript" src="dist/app.js"></script>


2.new webpack.NoErrorsPlugin()
当编译报错时，不会刷新页面，但会在控制台中提示错误信息


3.new webpack.HotModuleReplacementPlugin()
热加载
entry: [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server',
  './src/questionApp.jsx'
],

4. extract-text-webpack-plugin
https://github.com/webpack/extract-text-webpack-plugin

It moves every require("style.css") in entry chunks into a separate css output file

使用了style-loader后可通过使用require("xxxx")引入样式文件，
webpack会自动插入到html head的<style>标签，内置样式

通过extract-text-webpack-plugin，使用require("xxxx")引入样式文件，可以生成样式文件，
html中通过<link>引用 <link rel="stylesheet" type="text/css" href="dist/style.css">

*/