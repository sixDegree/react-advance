var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// webpack
// webpack-dev-server --port 3000
// webpack-dev-server --hot --inline
module.exports = {
	entry: [
      './src/app.jsx'
    ],
	output: {
		path: __dirname+"/dist",
		filename: "app.js",
		publicPath:"/dist"
	},
	resolve: {
        extensions: ['','.js','.jsx']
    },
	module: {
		loaders: [
			//{ test: /\.jsx$/, exclude: /node_modules/,loaders: ['react-hot','jsx'] },
			{ test: /\.jsx$/, exclude: /node_modules/,loaders: ['react-hot','babel'] },
			//{ test: /\.scss$/, loader:'style!css!sass'},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")},
		]
	},
	sassLoader: {
	    includePaths: [__dirname+"./sass"]
	},
	plugins: [
      //new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("style.css")
    ]
};