var React=require("react");
var ReactRouter=require("react-router");
var Link=ReactRouter.Link;

var Reflux=require("reflux");
var TopicStore=require("../stores/topic-store");
var ImgurActions=require("../stores/imgur-actions");


module.exports=React.createClass({
	//mixins: [Reflux.connect(TopicStore,'topics')],
	mixins: [Reflux.listenTo(TopicStore,'onChange')],
	onChange:function(topics){
		this.setState({topics:topics});
	},

	getInitialState:function(){
		return {topics:[]};
	},
	componentWillMount:function(){
		ImgurActions.listTopics();
	},
	render:function(){
		var self=this;
		var items= this.state.topics.map(function(topic){
	       return (
	       		/*
					<div className="media" key={topic.id}>
					  <div className="media-body">
					    <h4 className="media-heading">{topic.name}</h4>
					    <p>{topic.description}</p>
					  </div>
					  <div className="media-right">
					    <Link to={"/topics/"+topic.id}><span className="glyphicon glyphicon-th-list"></span></Link>
					  </div>
					</div>
	       		*/
	       		<Link to={"/topics/"+topic.id} key={topic.id} className="list-group-item">
					<h4>{topic.name}</h4>
					<p>{topic.description}</p>
					<br/>
				</Link>
	       	)
	    });
		return (<div className="list-group">{items}</div>)
	}
})