var httpProxy=require("http-proxy");
var proxy = httpProxy.createProxyServer({
	changeOrigin: true
});
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

var bundle = require('./bundle.js');
bundle();

var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
	console.log("Request:"+req.url);
	if(req.url=='/'){
		fs.readFile("./template.html",function(err,data){
			if (err) throw err;
			res.writeHead(200);
	  		res.end(data);
		});
	}else if(req.url.startsWith("/dist")){

		proxy.web(req,res,{target:"http://localhost:8080"});

	}else if(req.url.startsWith("/bower_components") 
		|| req.url.startsWith("/src")){
		fs.readFile("."+req.url,function(err,data){
			if(err) throw err;
			res.writeHead(200);
	  		res.end(data);
		})
	}else{
		res.writeHead(400,{'Content-Type':'text/plain'});
		res.end("not found");
	}
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});