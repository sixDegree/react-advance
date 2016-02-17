var React=require("react");
var connect=require("react-redux").connect;
var bindActionCreators=require("redux").bindActionCreators;
var BookActions=require("../actions/book-actions");

// Define Component
var BookList=React.createClass({
	render:function(){
		var bookList=this.props.books.map(function(item,i){
			return (
				<li key={i} onClick={this.props.selectBook.bind(this,item)}
					className="list-group-item">
					{item.title}
        		</li>
			)
		}.bind(this))
		return (
			<ul className="list-group col-sm-4">
		       {bookList}
		    </ul>
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

module.exports=connect(mapStateToProps,mapDispatchToProps)(BookList)