//console.log(require.extensions);
//require.extensions['.jsx']=undefined;

var React=require("react");
var ReactDOMServer=require("react-dom/server");

var Question=React.createClass({
	render:function(){
		//return <div>Hello Render on Server Side</div>;
		return React.DOM.div(null,"Render on Server Side");
	}
});
var element = React.createElement(Question);

var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=='/'){
		//var reactHtml=ReactDOMServer.renderToStaticMarkup(element);
		var reactHtml = ReactDOMServer.renderToString(element);
		console.log(reactHtml);
		res.writeHead(200,{'Content-Type':'text/html'});
	  	res.end(reactHtml);
	}else if(req.url.startsWith("/bower_components") || req.url.startsWith("/dist")){
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