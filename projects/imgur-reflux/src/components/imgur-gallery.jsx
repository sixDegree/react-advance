var React=require("react");
var Reflux=require("reflux")
var ImgurActions=require("../stores/imgur-actions");
var GalleryStore=require("../stores/gallery-store");
var Link=require("react-router").Link;

module.exports=React.createClass({
	mixins:[
		//Reflux.connect(GalleryStore,"gallery"),
		Reflux.listenTo(GalleryStore,"onChange")
	],
	onChange:function(gallery){
		console.log("onChange");
		if(gallery)
			this.setState({gallery:gallery,loading:false});
	},
	getInitialState:function(){
		return {
			loading:true,
			gallery:[]
		}
	},
	componentWillMount:function(){
		this.listGallery(this.props.params.topicId);
	},
	componentWillReceiveProps:function(nextProps){
		this.listGallery(nextProps.params.topicId);
	},
	listGallery:function(topicId){
		if(this.props.params.topicId)
			ImgurActions.listGalleryByTopic(this.props.params.topicId);
		else
			ImgurActions.listGallery();
	},
	render:function(){
		if(this.state.loading)
			return <h3>Loading...</h3>

		var self=this;
		var items=this.state.gallery.map(function(item){
			return self.renderItem(item);
		});
		return (<div>{items}</div>)
	},
	renderItem:function(item){
		return (
			<Link to={"/gallery/" + item.id} key={item.id} className="image-preview">
				<img src={item.link} />
			</Link>
			/*<div key={item.id} className="col-sm-6 col-md-4">
				<div className="thumbnail">
			      <img src={item.link} />
			      <div className="caption">
			        <h3>{item.title}</h3>
			        <p>{item.description}</p>
			      </div>
			    </div>
			</div>*/
		);
	}


})