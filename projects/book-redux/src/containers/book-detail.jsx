var React=require("react");
var connect=require("react-redux").connect;

var BookDetail=React.createClass({
	render:function(){
		if (!this.props.book) {
	      return <div>Select a book to get started.</div>;
	    }

	    return (
	      <div>
	        <h3>Details for:</h3>
	        <div>Title: {this.props.book.title}</div>
	        <div>Pages: {this.props.book.pages}</div>
	      </div>
	    );
	}

});

function mapStateToProps(state){
	return {book:state.activeBook}
}

module.exports=connect(mapStateToProps)(BookDetail);