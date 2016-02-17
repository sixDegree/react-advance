var React=require("react");
var ReactDOM=require("react-dom");

var Counter=React.createClass({
	propTypes:{
		value:React.PropTypes.number.isRequired,
		onIncreaseClick: React.PropTypes.func.isRequired
	},
	render:function(){
		return (
	      <div>
	        <span>{this.props.value}</span>
	        <button className="btn btn-default" onClick={this.props.onIncreaseClick}>Increase</button>
	      </div>
	    )
	}
});


// action
var increaseAction={type:'increase'};

// reducer
var counter=function(state,action){
	var count=state.count;
	switch(action.type){
		case 'increase':
			return {count:count+1};
		default:
			return state;
	}
};

// store 
var redux=require("redux");
var store=redux.createStore(counter,{count:0});

// check store
store.subscribe(function(){
	console.log(store.getState().count);
});
 
store.dispatch({type:'increase'});
store.dispatch({type:'increase'});

// Connected Component
var Provider=require("react-redux").Provider;
var connect=require("react-redux").connect;

//Map Redux state & actions to component props
var App=connect(function(state){
	return {value:state.count}
},function(dispatch){
	return {
		onIncreaseClick:function(){dispatch(increaseAction);}
	}
})(Counter)

// render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);