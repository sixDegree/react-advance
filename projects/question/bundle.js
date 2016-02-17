var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

module.exports=function(){
	config.entry.unshift("webpack-dev-server/client?http://localhost:8080");
	config.entry.unshift('webpack/hot/dev-server');
	console.log(config.entry);

	var compiler=webpack(config);
	var bundleStart=null;
	compiler.plugin('compile',function(){
		console.log('Boundling...');
		bundleStart=Date.now();
	});
	compiler.plugin('done',function(){
		console.log("Bundled in "+(Date.now() - bundleStart) + 'ms!');
	});

	var server=new WebpackDevServer(compiler, {
	  publicPath: config.output.publicPath,
	  hot: true,
	  historyApiFallback: true,
	  quiet: false,
	  noInfo: true,
	  stats: {colors: true}
	});

	server.listen(8080, 'localhost', function (err, result) {
	  if (err) console.log(err);
	  console.log('Bundling at localhost:8080');
	});
}


