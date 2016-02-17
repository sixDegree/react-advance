
// webpack --config webpack.config-1.js
// webpack-dev-server --config webpack.config-1.js --port 3000
// webpack-dev-server --config webpack.config-1.js --port 3000 --hot --inline
/*
--hot: adds the HotModuleReplacementPlugin and switch the server to hot mode.
--inline: embed the webpack-dev-server runtime into the bundle.
--progress 
--colors
*/

module.exports = {
	entry: "./src/app.jsx",
	output: {
		path: __dirname+"/dist",
		filename: "app-webpack1.js",
		publicPath:"/dist"
	},
	resolve: {
        extensions: ['','.js','.jsx']
    },
	module: {
		loaders: [
			//{ test: /\.jsx$/, loader: "babel-loader!jsx-loader?harmony" }
			{ test: /\.jsx$/, loader: "jsx" }
		]
	}
};