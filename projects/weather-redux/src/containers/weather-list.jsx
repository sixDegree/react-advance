var React=require("react");
var connect=require("react-redux").connect;
var WeatherActions=require("../actions/weather-actions");
var _=require("lodash");

var reactSparkLines=require("react-sparklines");
var Sparklines=reactSparkLines.Sparklines;
var SparklinesLine=reactSparkLines.SparklinesLine;
var SparklinesReferenceLine=reactSparkLines.SparklinesReferenceLine;

var GoogleMapLoader=require("react-google-maps").GoogleMapLoader;
var GoogleMap=require("react-google-maps").GoogleMap;

// Define Component
var WeatherList=React.createClass({
	render:function(){
		return (
		   <table className="table table-hover">
	        <thead>
	          <tr>
	            <th>City</th>
	            <th>Temperature (K)</th>
	            <th>Pressure (hPa)</th>
	            <th>Humidity (%)</th>
	          </tr>
	        </thead>
	        <tbody>
	          {this.props.weathers.map(this.renderItem)}
	        </tbody>
	      </table>
		)
	},
	renderItem:function(item,i){
		var result=_.reduce(item.list,function(result,n){
			result.temps.push(n.main.temp);
			result.pressures.push(n.main.pressure);
			result.humidities.push(n.main.humidity);
			return result;
		},{temps:[],pressures:[],humidities:[]});

	    //const { lon, lat } = cityData.city.coord;
	    return (
	      <tr key={item.city.name}>
	        <td>
	        	<div className="smallMap">
	        		{this.renderGoogleMap(item.city.coord)}
	        	</div>
	        	<label>{item.city.name},{item.city.country}</label>
	        </td>
	        <td>{this.renderChart({data:result.temps,color:"orange",units:"K"})}</td>
	        <td>{this.renderChart({data:result.pressures,color:"green",units:"hPa"})}</td>
	        <td>{this.renderChart({data:result.humidities,color:"black",units:"%"})}</td>
	      </tr>
	    );
	},
	renderChart:function(props){
		return (
			<div>
				<Sparklines data={props.data} height={120} width={180}>
				    <SparklinesLine color={props.color}/>
				    <SparklinesReferenceLine type="avg" />
				</Sparklines>
				<div>Average: {this.average(props.data)} {props.units}</div>
			</div>
		)
	},
	renderGoogleMap:function(props){
		//console.log(props);
		return (
		   <GoogleMapLoader
		      containerElement={ <div style={{height: '100%'}} /> }
		      googleMapElement={
		        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
		      } />
		  )
	},
	average:function(data){
		return _.round(_.sum(data)/data.length);
	}
})

// Define Container
function mapStateToProps(state){
	return {weathers:state.weathers};
}
module.exports=connect(mapStateToProps)(WeatherList)