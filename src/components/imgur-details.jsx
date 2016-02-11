var React=require("react");
var Reflux=require("reflux");
var ImgurActions=require("../stores/imgur-actions");
var GalleryStore=require("../stores/gallery-store");

module.exports=React.createClass({
	mixins:[Reflux.listenTo(GalleryStore,"onChange")],
	onChange:function(event,gallery){
		var item=GalleryStore.find(this.props.params.galleryId);
		if(item)
			this.setState({item:item,loading:false});
	},
	getInitialState:function(){
		return {
			loading:true,
			item:{comment_preview:[]}
		}
	},
	componentWillMount:function(){
		ImgurActions.getDetails(this.props.params.galleryId);
	},
	render:function(){
		if(this.state.loading)
			return <h3>Loading...</h3>

		var item=null;
		if(this.state.item){
			item=(
				<div>
			      <div className="panel panel-default">
			        <div className="panel-heading">
			          <h4>{this.state.item.title}</h4>
			        </div>
			        <div className="panel-body">
			          {this.renderImage()}
			        </div>
			        <div className="panel-footer">
			          <h5>{this.state.item.description}</h5>
			        </div>
			      </div>
			      <h3>Comments</h3>
			      {this.renderComments()}
			    </div>
			)
		}
		return (
			<div className="image-detail">
		      	{item}
		    </div>
	   	)
	},
	renderImage:function(){
		if(this.state.item.animated)
			return (
				<video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
			        <source src={this.state.item.mp4} type="video/mp4"></source>
			    </video>
			)
		else
			return (
				<img src={this.state.item.link}/>
			)
	},
	renderComments:function(){
		if(!this.state.comment_preview)
			return <h4>No Comments</h4>
		var comments=this.state.item.comment_preview.map(function(comment,index){
			return (
				<li className="list-group-item comment-box" key={comment.id}>
			        <span className="badge">{comment.ups}</span>
			        <h5>{comment.author}</h5>
			        {comment.comment}
			    </li>
			)
		});
		return (
			<ul className="list-group">
		     	{comments}
		    </ul>
		);
	}

});