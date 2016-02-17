var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// webpack-dev-server --port 3000 --hot --inline
module.exports = {
	entry: [
      './src/app.jsx'
    ],
	output: {
		path: __dirname+"/dist",
		filename: "app-webpack.js",
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