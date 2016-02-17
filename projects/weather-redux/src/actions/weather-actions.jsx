var axios=require("axios");

var API_KEY="44db6a862fba0b067b1930da0d769e98";
var ROOT_URL="http://api.openweathermap.org/data/2.5/forecast?mode=json&appid="+API_KEY;

var fetchWeather=function(location){
	console.log("Search:"+location);
	//return {type:"FETCH_WEATHER",payload:location};

	//var url=ROOT_URL+"&q="+location;	//q=London,us
	var request=axios.get(ROOT_URL,{params:{q:location}});
	//console.log(request);
	return {type:"FETCH_WEATHER",payload:request}
}

module.exports={
	fetchWeather:fetchWeather
}