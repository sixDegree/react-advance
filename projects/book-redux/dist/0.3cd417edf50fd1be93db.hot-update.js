webpackHotUpdate(0,{

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var combineReducers=__webpack_require__(179).combineReducers;

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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(195); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "book-reducers.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})