var Api=require("../utils/imgur-api");
var Reflux=require("reflux");
var ImgurActions=require("./imgur-actions");

module.exports=Reflux.createStore({
	listenables:[ImgurActions],
	/*onListTopics:function(){
		return Api.get("topics/defaults")
		.then(function(json){
			this.topics=json.data;
			this.trigger(this.topics);
		}.bind(this));
	},*/
	listTopics:function(){
		return Api.get("topics/defaults")
		.then(function(json){
			this.topics=json.data;
			this.trigger(this.topics);
		}.bind(this));
	}

})