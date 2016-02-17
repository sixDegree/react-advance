var React=require("react");
var BookList=require("../containers/book-list");
var BookDetail=require('../containers/book-detail');

module.exports=React.createClass({
	render:function(){
		return (
			<div>
				<BookList />
				<BookDetail />
			</div>
		)
	}
});

