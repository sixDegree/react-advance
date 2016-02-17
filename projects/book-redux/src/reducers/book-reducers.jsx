var combineReducers=require("redux").combineReducers;

// Reducer
var booksReducer=function(state,action){
	return [
		{ title: 'Javascript: The Good Parts', pages: 101 },
	    { title: 'Harry Potter', pages: 39 },
	    { title: 'The Dark Tower', pages: 85 },
	    { title: 'Eloquent Ruby', pages: 1 }
	]
}

var activeBookReducer=function(state,action){
	state=state||null;
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}

module.exports=combineReducers({
	books:booksReducer,
	activeBook:activeBookReducer
})