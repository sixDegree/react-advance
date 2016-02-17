var React=require("react");
var ReactDOM=require("react-dom");
var WeatherApp=require("./components/weather-app");
var weatherReducers=require("./reducers/weather-reducers");

var Provider=require("react-redux").Provider;
var createStore=require("redux").createStore;

//var store=createStore(weatherReducers);

var applyMiddleware=require("redux").applyMiddleware;
var ReduxPromise=require("redux-promise");
var createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);
var store=createStoreWithMiddleware(weatherReducers);

require("../sass/style.scss");

ReactDOM.render(
	<Provider store={store}>
		<WeatherApp />
	</Provider>,
	document.getElementById("app")
);


