

var React=require("react");
var ReactDOMServer=require("react-dom/server");

//hooks Babel to your require. 
//From then, you can require directly react components containing JSX 
//and they will be translated to JavaScript on the fly
require('babel-core/register');

var Question=require('./src/components/question');
var opts={
   showForm:false,
   newQuestion:null,
   questions:[
      {
        id:1,
        title:"Why do I have to complete a CAPTCHA?",
        description:"Completing the CAPTCHA proves you are a human and gives you temporary access to the web property.",
        voteCount:22
      },
      {
        id:2,
        title:"What can I do to prevent this in the future?",
        description:"If you are on a personal connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected with malware.",
        voteCount:10
      }
   ]

};
var element = React.createElement(Question,opts);

var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=='/'){
		//var reactHtml=ReactDOMServer.renderToStaticMarkup(element);
		var reactHtml = ReactDOMServer.renderToString(element);
		//console.log(reactHtml);
		fs.readFile("./template.html",function(err,data){
			if (err) throw err;
			res.writeHead(200,{'Content-Type':'text/html'});
	  		res.end(data.toString().replace("{content}",reactHtml));
		});
	}else if(req.url.startsWith("/bower_components") 
		|| req.url.startsWith("/dist")
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