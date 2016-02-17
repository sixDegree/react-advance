//var Fetch=require("whatwg-fetch");
var rootUrl="https://api.imgur.com/3/";
var apiKey="Client-ID 72b42162ff0733b";

module.exports={
	get:function(url){
		return fetch(rootUrl+url,{
				headers:{'Authorization':apiKey}
			}).then(function(response){
				return response.json();
			})
	}
};
