var React=require("react");
var ReactDOM=require("react-dom");
var BookApp=require("./components/book-app");
var BookReducers=require("./reducers/book-reducers");

var Provider=require("react-redux").Provider;
var createStore=require("redux").createStore;

ReactDOM.render(
	<Provider store={createStore(BookReducers)}>
		<BookApp />
	</Provider>,
	document.getElementById("app")
);


