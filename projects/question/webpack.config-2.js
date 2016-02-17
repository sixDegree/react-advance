var webpack=require("webpack");

// node server
// webpack-dev-server --config webpack.config-2.js --port 3000
// webpack-dev-server --config webpack.config-2.js --port 3000 --hot --inline

module.exports = {
	//entry: "./src/app.jsx",
	entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/app.jsx'
    ],

	output: {
		path: __dirname+"/dist",	// 打包文件存放的绝对路径
		filename: "app-webpack2.js",	//打包后的文件名
		publicPath:"/dist"		// 网站运行时的访问路径,同http://localhost:3000/dist
	},
	resolve: {
        extensions: ['','.js','.jsx']
    },
	module: {
		loaders: [
			//jsx-loader就可以添加?harmony参数使其支持ES6语法
			//{ test: /\.jsx$/, loader: "babel-loader!jsx-loader?harmony" }
			//{ test: /\.jsx$/, loader: "jsx" }
			{ test: /\.jsx$/, loaders: ['react-hot','jsx'] }
		]
	},
	plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()	//当编译报错时，不会刷新页面，但会在控制台中提示错误信息
    ]
};