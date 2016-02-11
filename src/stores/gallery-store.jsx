var Reflux=require("reflux");
var ImgurActions=require("./imgur-actions");
var Api=require("../utils/imgur-api");
var _=require("lodash");

module.exports=Reflux.createStore({
	listenables:[ImgurActions],
	gallery:[],
	listGalleryByTopic:function(topicId){
		return Api.get("topics/"+topicId)
		.then(function(json){
			this.gallery=_.reject(json.data,function(item){
				return item.is_album;
			});
			this.trigger(this.gallery);
		}.bind(this))
	},
	listGallery:function(){
		Api.get("gallery")
		.then(function(json){
			this.gallery=_.reject(json.data,function(item){
				return item.is_album;
			}).slice(0,20);
			this.trigger(this.gallery);
		}.bind(this))
	},
	getDetails:function(id){
		Api.get("gallery/image/"+id)
		.then(function(json){
			if(this.gallery)
				this.gallery.push(json.data);
			else
				this.gallery=[json.data];
			this.trigger("change",this.gallery);
		}.bind(this)) 
	},
	find:function(id){
		var item=_.findWhere(this.gallery,{id:id});
		if(item)
			return item;
		this.getDetails(id);
		return null;
	}
});