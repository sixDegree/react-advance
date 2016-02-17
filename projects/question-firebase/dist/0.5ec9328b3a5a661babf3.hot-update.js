webpackHotUpdate(0,{

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React=__webpack_require__(66);

	module.exports=React.createClass({displayName: "module.exports",
	  getDefaultProps:function(){
	    return {question:[]};
	  },
	  render:function(){
	    this.sortQuestions();
	    var items= this.props.questions.map(function(question){
	       return this.renderItem(question)
	     }.bind(this));
	    return React.createElement("div", null, items)
	  },
	  renderItem:function(question,self){
	    return (
	      React.createElement("div", {className: "media", key: question[".key"]}, 
	        React.createElement("div", {className: "media-left"}, 
	           React.createElement("button", {className: "btn btn-default", 
	              onClick: this.voteUpdate.bind(null,question,1)}, 
	            React.createElement("span", {className: "glyphicon glyphicon-chevron-up"}), 
	            React.createElement("div", null, question.voteCount)
	          ), 
	          React.createElement("button", {className: "btn btn-default", 
	              onClick: this.voteUpdate.bind(null,question,-1)}, 
	            React.createElement("span", {className: "glyphicon glyphicon-chevron-down"})
	          )
	        ), 
	        React.createElement("div", {className: "media-body"}, 
	          React.createElement("h4", {className: "media-heading"}, question.title), 
	          React.createElement("p", null, question.description)
	        ), 
	        React.createElement("div", {className: "media-right"}, 
	          React.createElement("button", {className: "btn btn-default", onClick: this.props.removeItem.bind(null,question)}, 
	            React.createElement("span", {className: "glyphicon glyphicon-remove"})
	          )
	        )
	      )
	    );
	  },

	  voteUpdate:function(question,addition){
	    //console.log(arguments);
	   /* question.voteCount=question.voteCount+addition;
	    this.props.voteUpdate(question[".key"],question.voteCount);
	    this.forceUpdate();*/
	    this.props.voteUpdate(question[".key"],question.voteCount+addition);
	  },
	  sortQuestions:function(){
	    this.props.questions.sort(function(a,b){
	      return b.voteCount-a.voteCount;
	    });
	  }
	});


	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(175); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "question-list-fb.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})