var React=require("react");
var connect=require("react-redux").connect;
var bindActionCreators=require("redux").bindActionCreators;
var WeatherActions=require("../actions/weather-actions");

// Define Component
var WeatherSearch=React.createClass({
	getInitialState:function(){
		return {term:''}
	},
	render:function(){
		return (
		  <form onSubmit={this.onFormSubmit} className="input-group">
	        <input
	          placeholder="city,country"
	          className="form-control"
	          value={this.state.term}
	          onChange={this.onInputChange} />
	        <span className="input-group-btn">
	          <button type="submit" className="btn btn-secondary">Submit</button>
	        </span>
	      </form>
		)
	},

	onInputChange:function(e){
		this.setState({term:e.target.value});
	},
	onFormSubmit:function(e){
		e.preventDefault();
		if(!this.state.term || this.state.term.length==0)
			return;
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}
})

// Define Container
function mapDispatchToProps(dispatch){
	return bindActionCreators(WeatherActions,dispatch);
}

module.exports=connect(null,mapDispatchToProps)(WeatherSearch)