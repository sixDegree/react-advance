var React=require("react");
var ReactDOM=require("react-dom");
var Router=require("react-router").Router;
var routes=require("./components/routes");


//ReactDOM.render(<Router routes={routes} />,document.getElementById("app"));

// Run on Server (cmd: node app)
var createBrowserHistory =require("history/lib/createBrowserHistory");
ReactDOM.render(<Router routes={routes} history={createBrowserHistory()} />,
	document.getElementById("app"));
