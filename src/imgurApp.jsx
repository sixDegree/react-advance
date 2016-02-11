var React=require("react");
var ReactDOM=require("react-dom");

var ReactRouter=require("react-router");
var Router=ReactRouter.Router;

var ImgurHeader=require("./components/imgur-header");
var NoMatch=require("./components/no-match");
var ImgurTopics=require("./components/imgur-topics");
var ImgurGallery=require("./components/imgur-gallery");
var ImgurDetails=require("./components/imgur-details");

var ImgurApp=React.createClass({
	render:function(){
		return (
			<div>
				<ImgurHeader {...this.props.route.headerProps}/>
				<div className="container">
					{this.props.children || "Welcome !"}
				</div>
			</div>
		)
	}
});

var routes={
	path:'/',
	component:ImgurApp,
	childRoutes:[
		{path:"/topics/defaults",component:ImgurTopics},
		{path:"/gallery",component:ImgurGallery},
		{path:"/topics/:topicId",component:ImgurGallery},
		{path:"/gallery/:galleryId",component:ImgurDetails},
		{path:"*",component:NoMatch}
	],
	headerProps:{
		title:"Imgur",
		navigations:[
			{url:"/topics/defaults",title:"Topics"},
			{url:"/gallery",title:"Gallery"}
		]
	}
};
ReactDOM.render(<Router routes={routes} />,document.getElementById("app"));
// Run on Server
/*var createBrowserHistory =require("history/lib/createBrowserHistory");
ReactDOM.render(<Router routes={routes} history={createBrowserHistory()} />,
	document.getElementById("app"));*/
