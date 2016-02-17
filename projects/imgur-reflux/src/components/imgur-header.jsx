var React=require("react");
var ReactDOM=require("react-dom");

var ReactRouter=require("react-router");
var Link=ReactRouter.Link;

module.exports=React.createClass({
	getDefaultProps:function(){
		return {
			title:null,
			navigations:[]
		}
	},
	render:function(){
		console.log("Header Render");
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