var React=require("react");
var WeatherSearch=require("../containers/weather-search");
var WeatherList=require('../containers/weather-list');

module.exports=React.createClass({
	render:function(){
		return (
			<div>
				<WeatherSearch />
				<WeatherList />
			</div>
		)
	}
});

