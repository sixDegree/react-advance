var React=require("react");
var ReactDOM=require("react-dom");
var Link=require("react-router").Link;

var Header=React.createClass({
	getDefaultProps:function(){
		return {
			title:null,
			navigations:[]
		}
	},
	render:function(){
		var navs=this.props.navigations.map(function(nav,index){
  			//return  <li key={index}><a href={nav.url}>{nav.title}</a></li>
  			return <li key={index}><Link to={nav.url} activeClassName="active">{nav.title}</Link></li>
      	})
		return (
			<nav className="navbar navbar-default">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" >
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand"  to="/">{this.props.title}</Link>
			    </div>

			    <div className="collapse navbar-collapse" id="navigation">
			      <ul className="nav navbar-nav navbar-right">
			      	{navs}
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
});


var Child=React.createClass({
	render:function(){
		return (
			<h3> I am Child {this.props.params.id} ! </h3>
		)
	}
});

var NoMatch=React.createClass({
	render:function(){
		return (<h3>No Match !</h3>)
	}
})

var App=React.createClass({
	render:function(){
		return (
			<div>
				<Header {...this.props.route.headerProps}/>
				<div className="container">
					{this.props.children || "Welcome !"}
				</div>
			</div>
		)
	}
});

var routes={
	path:'/',
	component:App,
	childRoutes:[
		{path:"/child/:id",component:Child},
		{path:"*",component:NoMatch}
	],
	headerProps:{
		title:"React Router Test",
		navigations:[
			{url:"/child/1",title:"Child1"},
			{url:"/child/2",title:"Child2"}
		]
	}
};

module.exports=routes;


