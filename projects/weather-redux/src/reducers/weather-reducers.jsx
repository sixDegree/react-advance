var combineReducers=require("redux").combineReducers;

// Reducer
var weathersReducer=function(state,action){
	state=state||[];
	switch(action.type){
		case 'FETCH_WEATHER':
			//console.log(action.payload);
			if(action.payload.status==200){
				var newState=state.filter(function(item){
					return item.city.id!=action.payload.data.city.id
				});
				return [action.payload.data,...newState];
			}
	}
	return state;
}

module.exports=combineReducers({
	weathers:weathersReducer
})