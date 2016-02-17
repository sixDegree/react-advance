webpackHotUpdate(0,{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React=__webpack_require__(66);
	var connect=__webpack_require__(173).connect;
	var bindActionCreators=__webpack_require__(179).bindActionCreators;
	var BookActions=__webpack_require__(194);

	// Define Component
	var BookList=React.createClass({displayName: "BookList",
		render:function(){
			var bookList=this.props.books.map(function(item,i){
				return (
					React.createElement("li", {key: i, onClick: this.props.selectBook(item), 
						className: "list-group-item"}, 
						book.title
	        		)
				)
			})
			return (
				React.createElement("ul", {className: "list-group col-sm-4"}, 
			       bookList
			    )
			)
		}
	})

	// Define Container

	function mapStateToProps(state){
		return {books:state.books};
	}

	function mapDispatchToProps(dispatch){
		/*return {
			selectBook:function(book){dispatch({type:'BOOK_SELECTED',payload:book})}
		}*/
		return bindActionCreators(BookActions,dispatch);
	}

	module.exports=connect(mapStateToProps)(BookList)

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(195); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "book-list.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})