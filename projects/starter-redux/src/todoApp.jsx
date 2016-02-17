var React=require("react");
var ReactDOM=require("react-dom");

var TodoApp=React.createClass({
	propTypes:{
		todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		    text: React.PropTypes.string.isRequired,
		    completed: React.PropTypes.bool.isRequired
		  }).isRequired).isRequired,
		showFilter:React.PropTypes.oneOf(['Show_All','Show_Completed','Show_Active']).isRequired
	},
	render:function(){
		console.log("render");
		return (
			<div>
				{this.renderCreate()}
				<br/>
	    		<ul>
	    			{
	    				this.props.todos.map(function(item,i){
	    					return this.renderItem(item,i);
		    			}.bind(this))
		    		}
	    		</ul>
				{this.renderShowFilter()}
			</div>
		);
	},
	renderItem:function(item,i){
		return (
			<li key={i} style={{cursor:'pointer'}} 
				onClick={this.updateItemHandler.bind(this,i)}>
				<span style={{textDecoration: item.completed?'line-through':'none'}}>{item.text}</span>
			</li>
		)
	},
	renderCreate:function(){
		return (
			<div className="input-group">
		      <input type="text" className="form-control"  ref="input"/>
		      <span className="input-group-btn">
		        <button className="btn btn-default" type="button" onClick={this.createItemHandler}>Add</button>
		      </span>
		    </div>
		)
	},
	renderShowFilter:function(){
		return (
			<div>
				<label className="radio-inline">
				  <input type="radio" name="showSelect" defaultChecked={this.props.showFilter=="Show_All"}
				  	value="Show_All" onChange={this.showFilterHandler} /> All
				</label>
				<label className="radio-inline">
				  <input type="radio" name="showSelect" defaultChecked={this.props.showFilter=="Show_Completed"}
				  	value="Show_Completed" onChange={this.showFilterHandler}/> Completed
				</label>
				<label className="radio-inline">
				  <input type="radio" name="showSelect" defaultChecked={this.props.showFilter=="Show_Active"}
				  	value="Show_Active" onChange={this.showFilterHandler}/> Active
				</label>
			</div>
		)
	},
	createItemHandler:function(){
		var input=this.refs.input;
		console.log("create item:"+input.value);
		this.props.dispatch({type:'Create_Todo',text:input.value});
		input.value='';
	},
	updateItemHandler:function(index){
		console.log("update item:");
		console.log(arguments);
		this.props.dispatch({type:'Complete_Todo',index:index})
	},
	showFilterHandler:function(e){
		//e.target.value
		console.log("show filter:"+e.target.value);
		this.props.dispatch({type:'Set_Show_Filter',showFilter:e.target.value})
	}

});

var state={
	todos:[{text: 'Use Redux',completed: true}, 
		{text: 'Learn to connect it to React',completed: false}],
	showFilter:'Show_All'
}

//ReactDOM.render(<TodoApp {...state}/>,document.getElementById("app"));

var redux=require("redux");

//reductor
var todoReductors=redux.combineReducers({
	todos:function(state,action){
		console.log("reductor todos:"+action.type);
		state=state||[];
		switch(action.type){
			case 'Create_Todo':
				return [
			        ...state,
			        {
			          text: action.text,
			          completed: false
			        }
			      ]
			case 'Complete_Todo':
				return [
			        ...state.slice(0, action.index),
			        Object.assign({}, state[action.index], {
			          completed: true
			        }),
			        ...state.slice(action.index + 1)
			      ]
			default:
				return state;
		}
	},
	showFilter:function(state,action){
		console.log("reductor showFilter:"+action.type);
		switch(action.type){
			case 'Set_Show_Filter':
				return action.showFilter;
			default:
				return 'Show_All';
		}
	}
});

//store
var store=redux.createStore(todoReductors);

//container
var Provider=require("react-redux").Provider;
var connect=require("react-redux").connect;

var filterTodos=function(todos,showFilter){
	console.log("filter todos");
	switch (showFilter) {
		case 'Show_All':
			return todos;
		case 'Show_Completed':
			return todos.filter(function(item){return item.completed;})
		case 'Show_Active':
			return todos.filter(function(item){return !item.completed;})
	}
};

var select=function(state){
	console.log("select");
	return {
		todos:filterTodos(state.todos,state.showFilter),
		showFilter:state.showFilter
	}
};
var App=connect(select)(TodoApp);

//render
ReactDOM.render(
	<Provider store={store}><App/></Provider>,
	document.getElementById("app")
)