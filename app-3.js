
require('babel-core/register');
var React=require("react");
var ReactDOMServer=require("react-dom/server");
var Router=require('react-router');
var match=Router.match;
var RoutingContext=Router.RoutingContext;
var routes = require("./src/routes");
var history=require("history");

var express=require("express");
var app = express();

//var ejs=require("ejs");
app.set('view engine', 'ejs');


app.use(express.static('bower_components'));
app.use(express.static('dist'));

app.use(function(req, res, next) {
	console.log(req.url);
	match({routes,location:req.url},function(error, redirectLocation, renderProps){
		if (error) {
	      res.status(500).send(error.message)
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
	    } else if (renderProps) {
	    	console.log("render react router");
	    	var element=React.createFactory(RoutingContext)(renderProps);
	    	var elementStr=ReactDOMServer.renderToString(element);
	    	//res.status(200).send(elementStr);
	    	res.render("index",{content:elementStr});
	    } else {
	      res.status(404).send('Not found')
	    }
	})
})

app.listen(3000,function(err, result){
	if (err) console.log(err);
  	console.log('Listening at localhost:3000');
});